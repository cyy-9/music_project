import React, { memo } from 'react'
import { useDispatch} from 'react-redux'

import {TopRankingWrapper} from './style';
import {getSizeImg} from '../../utils/format-utils'
import {getCurrentSongAction} from '../../pages/play/store/action.js';

export default memo(function YYTopRanking(props) {
    const {info} = props;
    const dispatch = useDispatch();
    // 点击按钮，将对应歌曲添加到播放列表，并播放
    const playMusic = (item) => {
        // console.log(item.id)
        // 根据传入的 id，到 action中执行相应的逻辑
        dispatch(getCurrentSongAction(item.id));
    }
    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                    <img src={getSizeImg(info.coverImgUrl, 80)} alt=""/>
                    <a href="to" className="image_cover"> </a>
                </div>
                <div className="info">
                    <a href="to">{info.name}</a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
            {
                info.tracks && info.tracks.slice(0, 10).map((item, index) => {
                    return (
                        <div key={item.id} className="list-item">
                            <div className="rank">{index + 1}</div>
                            <div className="info">
                                <a href="to" className="name text-nowrap"
                                     title={item.name}>{item.name}</a>
                                <div className="operate">
                                    <button className="btn play sprite_02" onClick={() => {
                                        playMusic(item)
                                    }}></button>
                                    <button className="btn addto sprite_icon2"></button>
                                    <button className="btn favor sprite_02"></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="footer">
                <a href="to">查看全部&gt;</a>
            </div>
        </TopRankingWrapper>
    )
})
