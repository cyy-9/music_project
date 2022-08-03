import React, { memo } from 'react'

import {getCount, getSizeImg} from '../../utils/format-utils'
import {SongsItemWrapper} from './style';

export default memo(function YYSongsItem(props) {
    const {info} = props;
    return (
        <SongsItemWrapper>
            <div className="cover-top">
                <img src={getSizeImg(info.picUrl || info.coverImgUrl, 140)} alt="歌单"/>
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {/* 格式化数字的判断 */}
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap" title={info.name}>
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                by {info.copywriter || '热门推荐'}
            </div>
        </SongsItemWrapper>
    )
})
