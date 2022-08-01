import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { Slider, } from 'antd';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import YYPlayList from '../../../components/play-list';

import {
    ToolBarWrapper,
    Control,
    PlayInfo,
    Operator,
} from './style';
import {
    getCurrentSongAction,
    getLyricAction,
    savePlayModeAction,
    saveRealTimeLyricAction,
    saveIsCloseAction,
} from '../store/action';
import {formatDate, getPlaySong} from '../../../utils/format-utils'

export default memo(function YYToolBar() {
    // 保存当前播放歌曲实时的时间，毫秒单位
    const [currentTime, setCurrentTime] = useState(0);
    // 歌曲播放进度条的控制
    const [progress, setProgress] = useState(0);
    // 是否在滑动进度条
    const [isChanging, setIsChanging] = useState(false);
    // 当前是否在播放状态
    const [isplaying, setIsplaying] = useState(false);

    const dispatch = useDispatch();
    // 在 redux中拿到当前播放歌曲，播放模式，播放列表，当前歌曲在列表中的 index，歌词，实时一句歌词
    const {
        currentSong,
        playMode, 
        songsList, 
        currentSongIndex, 
        lyrics,
        realTimeLyric,
        isClose,
    } = useSelector(state => ({
        currentSong: state.playReducer.currentSong,
        playMode: state.playReducer.playMode,
        songsList: state.playReducer.songsList,
        currentSongIndex: state.playReducer.currentSongIndex,
        lyrics: state.playReducer.lyrics,
        realTimeLyric: state.playReducer.realTimeLyric,
        isClose: state.playReducer.isClose,
    }), shallowEqual);
    useEffect(() => {
        dispatch(getCurrentSongAction(songsList[0] && songsList[0].id))
    }, [dispatch, songsList])
    // 给 audio标签设置 src属性
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        audioRef.current.play().then(res => {
            setIsplaying(true);
        }).catch(() => {
            setIsplaying(false);
        }); 
    }, [currentSong]);
    const audioRef = useRef();                  // 保存 audio标签
    const lyricRef = useRef(realTimeLyric);     // 保存实时播放的一句歌词

    // 点击播放按钮的回调，可能会多次点击，不必每次点击都设置 src，所以将 src移到 useEffect设置
    const playMusic = () => {
        // audioRef.current.src = getPlaySong(currentSong.id);
        
        // 判断是否在播放状态
        isplaying ? audioRef.current.pause() : audioRef.current.play();
        setIsplaying(!isplaying);
    }
    // audio标签实时播放音乐的回调
    const timeUpdate = (e) => {
        // 不拖拽时，使进度条正常滑动，拖拽时，不调用这个回调函数
        if(!isChanging) {
            // audio标签的特定属性能拿到播放歌曲实时的秒数
            setCurrentTime(e.target.currentTime * 1000);
            setProgress(currentTime / currentSong.dt * 100);
        }
        // 这里做歌词的匹配
        // 最终找到的实时的一句歌词
        let currentLyricIndex = -1;
        let len = lyrics.length;    // 歌词数组长度
        for(let i = 0; i < len; i++) {
            if(e.target.currentTime * 1000 < lyrics[i].time) {
                currentLyricIndex = i - 1;
                break;  // 找到位置就跳出循环
            }
        }
        // 一句实时歌词
        const realTimeLyric = lyrics[currentLyricIndex] && lyrics[currentLyricIndex].content;
        if(realTimeLyric !== lyricRef.current) {
            lyricRef.current = realTimeLyric;
            dispatch(saveRealTimeLyricAction(realTimeLyric));
            // console.log(realTimeLyric)
        }
    }
    const sliderChange = useCallback((value) => {
        // value是拖拽进度条是实时的值
        // if(!isChanging) {
        //     let time = audioRef.current.currentTime * 1000;
        //     setProgress(value);
        // }
        setIsChanging(true);
        setCurrentTime(value / 100 * currentSong.dt);
        setProgress(value);
    }, [currentSong.dt]);
    const sliderAfterChange = useCallback((value) => {
        // value是拖拽松手时拿到的进度掉的刻度值
        let time = value / 100 * currentSong.dt / 1000; // 松手时的秒数
        // 获取到当前应该播放的时间 time后，立即更改 currentTime
        setCurrentTime(time * 1000);
        // 松手时，音乐在松手的位置播放
        audioRef.current.currentTime = time;
        setIsChanging(false);
    }, [currentSong.dt]);

    // 改变播放模式，顺序 0，随机 1，单曲循环 2
    const changePlayMode = () => {
        let newPlayMode = playMode + 1;
        if(newPlayMode > 2) {
            newPlayMode = 0;
        }
        dispatch(savePlayModeAction(newPlayMode));
    }
    // 切换歌曲，temp=-1 上一首；temp=1 下一首
    const changeMusic = (temp) =>  {
        let newCurrentSongIndex = currentSongIndex; // 拿到当前歌曲索引的副本
        switch(playMode) {  // 根据播放模式，确定下一个歌曲的索引
            case 1:     // 随机播放
                let randomIndex = Math.floor(Math.random() * songsList.length);
                while(randomIndex === currentSongIndex) {   // 新索引值不能和 当前播放歌曲一样
                    randomIndex = Math.floor(Math.random() * songsList.length);
                }
                newCurrentSongIndex = randomIndex;
                break;
            case 0:    // 顺序播放
                newCurrentSongIndex += temp;   // 索引 +1或 -1，表示切换歌曲
                if(newCurrentSongIndex > songsList.length - 1) {   // 边界处理
                    newCurrentSongIndex = 0;
                } else if(newCurrentSongIndex < 0) {
                    newCurrentSongIndex = songsList.length - 1;
                }
                break;
            default:    // 单曲循环
                newCurrentSongIndex = currentSongIndex;
        }
        // 拿到下一首歌
        const newCurrentSong = songsList[newCurrentSongIndex];
        // 修改 redux状态，包括当前播放歌曲 index，当前播放歌曲
        dispatch(getCurrentSongAction(newCurrentSong.id));
        dispatch(getLyricAction(newCurrentSong.id))
    }
    // 歌曲播放完之后的切换
    const musicEnded = () => {
        if(playMode === 2) {    // 单曲循环时
            // 播放完时，将歌曲时间设为0，接着从头播放
            audioRef.current.currentTime = 0;
            // 调用play()，开始播放
            audioRef.current.play();
        } else {    // 顺序播放和随机播放时
            changeMusic(1);
        }

    }
    // 
    const changeClose = () => {
        dispatch(saveIsCloseAction(!isClose));
    }

    // 工具栏歌曲图片链接
    const currentSongUrl = currentSong.al && currentSong.al.picUrl + '?param=34y34';
    // 歌曲作者名字的处理，防止 name of undefined
    const currentSongArtist = currentSong.ar && currentSong.ar[0].name;
    // 歌曲播放实时时间的处理
    const showCurrentTime = formatDate(currentTime, "mm:ss");

    return (
        <ToolBarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isplaying}>
                    <button className="btn prev sprite_player"
                            onClick={e => {changeMusic(-1)}}
                            ></button>
                    <button className="btn play sprite_player" onClick={playMusic}></button>
                    <button className="btn next sprite_player"
                            onClick={e => {changeMusic(1)}}
                            ></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/play">
                            <img src={currentSongUrl} alt="歌曲图片"/>
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <a href="to">{currentSong.name}</a>
                            <a href="to" className="singer-name">{currentSongArtist}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} 
                                    value={progress}
                                    onChange={sliderChange}
                                    onAfterChange={sliderAfterChange} 
                                    tipFormatter={null}/>
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{formatDate(currentSong.dt, "mm:ss")}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator playMode={playMode}>
                    <div>
                        <button className="favor btn sprite_player" title="收藏"></button>
                        <button className="share btn sprite_player" title="分享"></button>
                    </div>
                    <div className="right">
                        <button className="btn sprite_player volume" 
                                title="音量"
                                ></button>
                        <button className="btn sprite_player loop" 
                                title={playMode === 2 ? '单曲循环' : playMode === 1 ? '随机播放' : '顺序播放'} 
                                onClick={changePlayMode}
                                ></button>
                        <button className="btn sprite_player playlist" 
                                title="播放列表"
                                onClick={changeClose}
                                ></button>
                        <span className="list-count">{songsList.length}</span>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={musicEnded}/>
            { isClose && <YYPlayList currentTime={currentTime}/>}
        </ToolBarWrapper>
    )
})
