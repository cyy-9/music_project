import React, { memo, useState } from 'react';
import {NavLink} from 'react-router-dom';
import {Input} from 'antd';
import {
    SearchOutlined,
    RightOutlined,
} from '@ant-design/icons';
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
    SearchMenuDiv
} from './style';
import {headerLinks} from '../../common/local-data.js';
import request from '../../services/request';
import LoginModal from '../login-modal';

function SearchMenu(props) {
    const {visible, keywords, songs, artists, albums, playlists} = props;
    const handleClick = (e) => {
        console.log(keywords);
    }
    return (
        visible ? 
        <SearchMenuDiv 
            onClick={(e) => handleClick(e)}
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
                        <h3 className='title1 title-item'>单曲</h3>
                        <h3 className='title2 title-item'>歌手</h3>
                        <h3 className='title3 title-item'>专辑</h3>
                        <h3 className='title4 title-item'>歌单</h3>
                    </div>
                    <div className="result-list">
                    {
                        songs.length && songs.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === songs.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top' : ''}`}
                                    key={item.id}
                                >{`${item.name}-${item.artists.reduce((pre, i) => {
                                    return i.name + " " + pre;
                                }, '')}`}</div>
                            )
                        })
                    }
                    {
                        artists.length && artists.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === artists.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top border-style' : ''}`}
                                    key={item.id}
                                >{item.name}</div>
                            )
                        })
                    }
                    {
                        albums.length && albums.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === albums.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top border-style' : ''}`}
                                    key={item.id}
                                >{`${item.name}-${item.artist.name}`}</div>
                            )
                        })
                    }
                    {
                        playlists.length && playlists.map((item, index) => {
                            return (
                                <div 
                                    className={`list-item ${index === playlists.length - 1 ? 'padding-bottom' : ''} ${index === 0 ? 'padding-top border-style' : ''}`}
                                    key={item.id}
                                >{item.name}</div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </SearchMenuDiv> : null
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
            setSongs(res.result.songs);
            setArtists(res.result.artists);
            setAlbums(res.result.albums);
            setPlaylists(res.result.playlists);
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
                    <div 
                        className="login-button"
                        onClick={handleClickLogin}
                    >登录</div>
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
