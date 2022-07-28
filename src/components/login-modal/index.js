import React, {useEffect, useState, useRef} from 'react';
import {CloseOutlined} from '@ant-design/icons'
import {
  UnLoginStyle,
  AuthStyle,
} from './style';
import axios from 'axios';
import {api} from '../../services/config';

export default function LoginModal(props) {
  const {clickClose} = props;
  const [loginKey, setLoginKey] = useState('');
  const [qrcodeBase64, setQrcodeBase64] = useState('');
  // 扫码状态是否为授权中
  const [isLoginAuth, setIsLoginAuth] = useState(false);

  const timerRef = useRef();
  // 获取登录 key
  useEffect(() => {
    axios({
      url: api + '/login/qr/key',
      params: {
        timeStamp: new Date().getTime(),
      }
    }).then((res) => {
      console.log(res.data.data.unikey);
      setLoginKey(res.data.data.unikey)
    })
    console.log('modal创建');
    return () => {
      console.log('组件销毁');
      clearInterval(timerRef.current);
    }
  }, []);
  // 获取二维码图片
  useEffect(() => {
    // console.log(new Date().getTime())
    if(loginKey) {
      axios({
        method: 'GET',
        url: api + '/login/qr/create',
        params: {
          key: loginKey,
          qrimg: 1,
          timeStamp: new Date().getTime(),
        }
      }).then((res) => {
        // console.log(res.data.data.qrimg);
        setQrcodeBase64(res.data.data.qrimg);
      })
    }
  }, [loginKey]);
  // 轮询接口操作
  useEffect(() => {
    if(loginKey) {
      timerRef.current = setInterval(() => {
        axios({
          url: api + '/login/qr/check',
          params: {
            key: loginKey,
            timeStamp: new Date().getTime(),
          },
          method: 'GET',
        }).then((res) => {
          if(res.data.code === 803) {
            clickClose();
            document.cookie = res.data.cookie;
          } else if(res.data.code === 802) {
            setIsLoginAuth(true);
          }
        })
      }, 5000);
    }
  }, [loginKey, clickClose]);

  const handleClick = () => {
    clickClose();
  }
  return (
    <UnLoginStyle>
      <div className="header">
        <div className="title">登录</div>
        <div className="close-icon"><CloseOutlined onClick={handleClick}/></div>
      </div>
      {
        isLoginAuth ? 
        <AuthStyle>
          <div className="imgwrapper">
            <img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9765284460/1b1d/9f46/2fa3/2d5d07bb5fcf8c24c1ad788c923ef313.png" alt="" />
          </div>
          <div className="authing">
            <p className='p1'>扫描成功</p>
            <p className='p2'>请在手机上确认登录</p>
          </div>
        </AuthStyle>
        :
        <div className="body">
          <div className="body-left">
            <img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png" alt="" />
          </div>
          <div className="body-right">
            <div className="body-title">扫码登录</div>
            <div className="qrcode">
              <img src={qrcodeBase64} alt=""/>
            </div>
          </div>
        </div>
      }
    </UnLoginStyle>
  )
}
