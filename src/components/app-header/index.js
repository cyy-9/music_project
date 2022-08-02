import React, { memo, useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {Input, Popover} from 'antd';
import {
    SearchOutlined,
    RightOutlined,
} from '@ant-design/icons';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import axios from 'axios';
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
    SearchMenuDiv,
    AvatarMenuStyle,
} from './style';
import {headerLinks} from '../../common/local-data.js';
import request from '../../services/request';
import LoginModal from '../login-modal';
import {api} from '../../services/config';
import {
    changeLoginStatus,
    changeUserId,
    ChangeUserAvatar,
} from './store/action';

function SearchMenu(props) {
    const {visible, keywords, songs, artists, albums, playlists} = props;
    return (
        visible ? 
        <SearchMenuDiv 
            songsCount={songs.length}
            artistsCount={artists.length}
            albumsCount={albums.length}
            playlistsCount={playlists.length}
        >
            <div className='search-menu-content'>
                <div className="search-users">
                    搜{`"${keywords}"`}相关用户<RightOutlined />
                </div>
                <div className="result-content">
                    <div className="result-title">
                        {songs.length ? <h3 className='title1 title-item'>单曲</h3> : null}
                        {artists.length ? <h3 className='title2 title-item'>歌手</h3> : null}
                        {albums.length ? <h3 className='title3 title-item'>专辑</h3> : null}
                        {playlists.length ? <h3 className='title4 title-item'>歌单</h3> : null}
                    </div>
                    <div className="result-list">
                    {
                        songs.length ? songs.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === songs.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top' : ''}`}
                                    key={item.id}
                                >{`${item.name}-${item.artists.reduce((pre, i) => {
                                    return i.name + " " + pre;
                                }, '')}`}</div>
                            )
                        }) : null
                    }
                    {
                        artists.length ? artists.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === artists.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top border-style' : ''}`}
                                    key={item.id}
                                >{item.name}</div>
                            )
                        }) : null
                    }
                    {
                        albums.length ? albums.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === albums.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top border-style' : ''}`}
                                    key={item.id}
                                >{`${item.name}-${item.artist.name}`}</div>
                            )
                        }) : null
                    }
                    {
                        playlists.length ? playlists.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === playlists.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top border-style' : ''}`}
                                    key={item.id}
                                >{item.name}</div>
                            )
                        }): null
                    }
                    </div>
                </div>
            </div>
        </SearchMenuDiv> : null
    )
}

function AvatarMenu(props) {
    const {signOut} = props;
    const handleClick = () => {
        signOut();
    }
    return (
        <AvatarMenuStyle >
            <div className="avatar-menu-item">我的主页</div>
            <div className="avatar-menu-item">我的消息</div>
            <div className="avatar-menu-item">我的等级</div>
            <div className="avatar-menu-item">VIP会员</div>
            <div className="avatar-menu-item">个人设置</div>
            <div className="avatar-menu-item">实名认证</div>
            <div 
                className="avatar-menu-item"
                onClick={handleClick}
            >退出</div>
        </AvatarMenuStyle>
    )
}

export default memo(function YYAppHeader() {
    const [isSearchMenuVisible, setIsSearchMenuVisible] = useState(false);
    const [inputKeywords, setInputKeywords] = useState('');
    // 搜索结果
    const [songs, setSongs] = useState([]);   // 单曲
    const [artists, setArtists] = useState([]);   // 歌手
    const [albums, setAlbums] = useState([]);     // 专辑
    const [playlists, setPlaylists] = useState([]);     // 歌单
    const [loginModalVisible, setLoginModalVisible] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('获取登录状态');
        let cookie = localStorage.getItem('cookie');
        axios({
          url: api + '/login/status',
          params: {
            cookie: cookie,
            timestamp: new Date().getTime(),
          }
        }).then((res) => {  
            if(res.data.data.account && res.data.data.account.id) {
                dispatch(changeLoginStatus(true));
            }
        })
    }, [dispatch]);

    const {isLogin, userAvatar} = useSelector(state => ({
        isLogin: state.loginReducer.isLogin,
        userAvatar: state.loginReducer.userAvatar,
    }), shallowEqual);

    // 登录成功后，获取用户信息
    useEffect(() => {
        if(isLogin) {
            axios({
                url: api + '/user/account',
                params: {
                    cookie: localStorage.getItem('cookie'),
                    timestamp: new Date().getTime(),
                }
            }).then((res) => {
                // console.log(res.data);
                dispatch(changeUserId(res.data.profile.userId));
                dispatch(ChangeUserAvatar(res.data.profile.avatarUrl));
            })
        }
    }, [isLogin, dispatch]);

    // 点击退出
    const signOut = () => {
        dispatch(changeLoginStatus(false));
        localStorage.removeItem('cookie');
    }

    const showSelectItem = (item, index) => {
        if(index < 3) {
            return (
                <NavLink to={item.link} className="aLink">{item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
                
            )
        } else {
            return (
                <a 
                    href={item.link} 
                    className="aLink" 
                    rel="noopener noreferrer" 
                    target="_blank"
                >{item.title}
                </a>
            )
        }
    }
    const handleChangeKeyword = (e) => {
        if(e.target.value) {
            setIsSearchMenuVisible(true);
        } else {
            setIsSearchMenuVisible(false);
        }
        setInputKeywords(e.target.value);
        request({
            url: '/search/suggest',
            params: {
                keywords: e.target.value,
            }
        }).then((res) => {
            console.log(res)
            setSongs(res.result.songs || []);
            setArtists(res.result.artists || []);
            setAlbums(res.result.albums || []);
            setPlaylists(res.result.playlists || []);
        })
    }
    const handlePressEnter = (e) => {
        // console.log(searchKeyword)
        request({
            url: '/search',
            params: {
                keywords: inputKeywords,
            }
        }).then((res) => {
            console.log(res);
        })
    }
    const handleInputFocus = () => {
        if(inputKeywords) setIsSearchMenuVisible(true);
    }
    const handleInputBlur = () => {
        setIsSearchMenuVisible(false);
    }
    const handleClickLogin = () => {
        setLoginModalVisible(true);
    }
    const handleClickClose = () => {
        setLoginModalVisible(false);
    }
    return (
        <HeaderWrapper id="header-wrapper">
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/discover/recommend" className="logo sprite_01"> </a>
                    <div className="select-list">
                    {
                        headerLinks.map((item, index) => {
                            return (
                                <div key={item.title} className="select-item">
                                {
                                    showSelectItem(item, index)
                                }
                                </div>
                            )
                        })
                    }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input
                        className="search" 
                        placeholder="音乐/视频/电台/用户" 
                        prefix={<SearchOutlined/>}
                        onChange={handleChangeKeyword}
                        onPressEnter={(e) => handlePressEnter(e)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    {/* <SearchMenu visible={isSearchMenuVisible}/> */}
                    <SearchMenu 
                        visible={isSearchMenuVisible} 
                        keywords={inputKeywords}
                        songs={songs}
                        playlists={playlists}
                        albums={albums}
                        artists={artists}
                    />
                    <div className="center">创作者中心</div>
                    {
                        !isLogin ? 
                        <div 
                            className="login-button"
                            onClick={handleClickLogin}
                        >登录</div> :
                        <div className="login-success">
                            <div className="avatar">
                                {
                                    userAvatar ?
                                    <Popover 
                                        content={<AvatarMenu signOut={signOut}/>}
                                        arrowPointAtCenter={true}
                                        color="#2b2b2b"
                                    >
                                        <img src={userAvatar} alt=""/>
                                    </Popover>
                                    : null
                                }
                            </div>
                        </div>
                    }   
                </HeaderRight>
            </div>
            <div className="divider"></div>
            {
                loginModalVisible ? <LoginModal 
                    visible={loginModalVisible}
                    clickClose={handleClickClose}
                ></LoginModal> : null
            }
        </HeaderWrapper>
    )
})
