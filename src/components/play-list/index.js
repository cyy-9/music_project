import React, { memo, useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {
    FolderAddOutlined,
    DeleteOutlined,
    CloseOutlined,
    CustomerServiceFilled,
    FrownOutlined,
  } from '@ant-design/icons';
import {
    PlayListWrapper,
} from './style';
import {formatDate} from '../../utils/format-utils';
import {
    saveIsCloseAction,
    getCurrentSongAction,
    saveSongsListAction,
} from '../../pages/play/store/action'


export default memo(function YYPlayList(props) {
    const {currentTime} = props;
    // 保存每次匹配到的歌词的索引，让这句歌词高亮
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
    const dispatch = useDispatch();
    const { songsList, 
            currentSong, 
            lyrics, 
            isClose, 
            currentSongIndex,
        } = useSelector(state => ({
        songsList: state.playReducer.songsList,   // 播放列表
        currentSong: state.playReducer.currentSong,   // 当前播放歌曲
        lyrics: state.playReducer.lyrics,         // 歌词数组
        isClose: state.playReducer.isClose,       // 控制播放列表开关
        currentSongIndex: state.playReducer.currentSongIndex, // 歌曲索引
    }), shallowEqual);
    // 找到正确歌词的索引
    useEffect(() => {
        for(let i = 0; i <= lyrics.length; i++) {
            if(i !== lyrics.length && currentTime < lyrics[i].time) {
                setCurrentLyricIndex(i - 1);
                break;
            }
            if(i === lyrics.length) {
                setCurrentLyricIndex(i - 1);
            }
        }
    }, [lyrics, currentTime]);
    // 索引变化时，歌词滚动
    useEffect(() => {
        let listElement = document.getElementById('lyrics-scroll');
        if(currentLyricIndex >= 4 && currentLyricIndex <= lyrics.length - 4) {
            listElement.scrollTop = 32 * (currentLyricIndex - 3);
        }
    }, [currentLyricIndex, lyrics])

    const handleClose = () => {
        dispatch(saveIsCloseAction(!isClose));
    }
        
    const getArtist = (song) => {
        let artist = "";
        song.ar && song.ar.forEach((item) => {
            artist += (item.name + ' ');
        })
        return artist;
    }
    // 点击播放列表的歌曲的回调，实现点击播放
    const playClick = (e, songId) => {
        let listElement = document.getElementById('lyrics-scroll');
        e.preventDefault();
        dispatch(getCurrentSongAction(songId));
        listElement.scrollTop = 0;
    }
    // 收藏全部和清除的回调，temp=0 收藏全部；temp=1 清除
    const linkClick = (e, temp) => {
        e.preventDefault();
        if(temp === 1) {
            dispatch(saveSongsListAction([]));
        }
    }
    
    return (
        <PlayListWrapper className="play-list">
            <div className="header">
                <h4 className="list-title">播放列表({songsList.length})</h4>
                <a href="/to" className="favor" onClick={e => linkClick(e, 0)}>
                    <FolderAddOutlined/>&nbsp;
                    <span>收藏全部</span>
                </a>
                <a href="/to" className="clear" onClick={e => linkClick(e, 1)}>
                    <DeleteOutlined />
                    <span>&nbsp;清除</span>
                </a>
                <div className="song-name">{currentSong.name}</div>
                <span className="close" onClick={handleClose}><CloseOutlined /></span>
            </div>
            <div className="content">
                <div className="left">
                    <div className="song-list">
                    {
                        songsList.length !== 0 ? songsList.map((song, index) => {
                            return (
                                <div className="song-item" 
                                     key={song.id} 
                                     onClick={e => playClick(e, song.id)}
                                    >
                                    <div className="play-icon">
                                    {index === currentSongIndex ? <CustomerServiceFilled/> : null}
                                    </div>
                                    <div className="name">
                                        {song.name}
                                    </div>
                                    <div className="tools">
                                    </div>
                                    <div className="artist text-nowrap"
                                         title={getArtist(song)}
                                         >{getArtist(song)}</div>
                                    <div className="time">{formatDate(song.dt, "mm:ss")}</div>
                                </div>
                            )
                        }) : (
                            <div className="empty-tips"><FrownOutlined className="empty-icon"/>你还没有添加任何歌曲</div>
                        )
                    }
                    </div>
                </div>
                <div className="right" id="lyrics-scroll">
                    <div className="lyric-list">
                    {
                        lyrics && lyrics.map((lyric, index) => {
                            return (
                                <div className={`lyric ${index === currentLyricIndex ? "active" : ''}`} key={index}>
                                    {lyric.content}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </PlayListWrapper>
    )
})
