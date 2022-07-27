import React, {useEffect, useState, useRef} from 'react';
import {CloseOutlined} from '@ant-design/icons'
import {LoginModalStyle} from './style';
import axios from 'axios';
import {api} from '../../services/config';

export default function LoginModal(props) {
  const {clickClose} = props;
  const [loginKey, setLoginKey] = useState('');
  const [qrcodeBase64, setQrcodeBase64] = useState('');
  const timerRef = useRef();
  // 获取登录 key
  useEffect(() => {
    axios.get(api + '/login/qr/key').then((res) => {
      console.log(res.data.data.unikey);
      setLoginKey(res.data.data.unikey)
    })
    console.log('modal创建');
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
          // timeStamp: new Date().getTime(),
        }
      }).then((res) => {
        // console.log(res.data.data.qrimg);
        setQrcodeBase64(res.data.data.qrimg);
      })
    }
  }, [loginKey]);
  // 轮询接口操作
  useEffect(() => {
    if(1) {
      // timerRef.current = setInterval(() => {
      //   axios({
      //     url: api + '/login/qr/check',
      //     params: {
      //       key: loginKey,
      //     },
      //     method: 'GET',
      //   }).then((res) => {
      //     // if(res.data.code === )
      //   })
      // }, 10000);
    }
    return () => {
      clearInterval(timerRef);
      console.log('loginmodal组件销毁了');
    }
  }, []);

  const handleClick = () => {
    clickClose();
  }
  return (
    <LoginModalStyle>
      <div className="header">
        <div className="title">登录</div>
        <div className="close-icon"><CloseOutlined onClick={handleClick}/></div>
      </div>
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
    </LoginModalStyle>
  )
}
