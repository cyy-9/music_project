import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';

import {HomeAcInfoStyle} from './style';
import {api} from '../../../../../../services/config';

export default function HomeAcInfo() {
  const [userInfo, setUserInfo] = useState([]);
  const {userId, userAvatar} = useSelector((state) => ({
    userId: state.loginReducer.userId,
    userAvatar: state.loginReducer.userAvatar,
  }));

  useEffect(() => {
    if(userId) {
      axios({
        url: api + '/user/detail',
        params: {
          cookie: localStorage.getItem('cookie'),
          uid: userId,
          time: new Date().getTime(),
        }
      }).then((res) => {
        // console.log(res.data);
        setUserInfo(res.data);
      })
    }
  }, [userId]);
  return (
    <HomeAcInfoStyle>
      <div className="user-info">
        <div className="img-wrap">
          <img src={userAvatar} alt="" />
        </div>
        <div className="info-detail">
          <div className='user-nickname'>{userInfo.profile && userInfo.profile.nickname}</div>
          <div className="user-level">Lv.{userInfo.level}</div>
          <div className="sign-in">签到</div>
        </div>
      </div>
      <div className="user-follows">
        <div className="follows-item">
          <div className='count-item'>{userInfo.profile && userInfo.profile.eventCount}</div>
          <div>动态</div>
        </div>
        <div className="follows-item">
          <div className='count-item'>{userInfo.profile && userInfo.profile.follows}</div>
          <div>关注</div>
        </div>
        <div className="follows-item">
          <div className='count-item'>{userInfo.profile && userInfo.profile.followeds}</div>
          <div>粉丝</div>
        </div>
      </div>
    </HomeAcInfoStyle>
  )
}
