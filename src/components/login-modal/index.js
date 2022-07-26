import React from 'react';
import {CloseOutlined} from '@ant-design/icons'
import {LoginModalStyle} from './style';

export default function LoginModal(props) {
  return (
    <LoginModalStyle>
      <div className="header">
        <div className="title">登录</div>
        <div className="close-icon"><CloseOutlined /></div>
      </div>
      <div className="body">
        <div className="body-left">
          <img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png" alt="" />
        </div>
        <div className="body-right">
          <div className="body-title">扫码登录</div>
          <div className="qrcode"></div>
        </div>
      </div>
    </LoginModalStyle>
  )
}
