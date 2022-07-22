import React, { memo } from 'react'

import {getSizeImg} from '../../utils/format-utils'
import {DiscWrapper} from './style';

export default memo(function YYDiscItem(props) {
    // 父组件传来的数据
    const {info, width = 153, size = 130, bgposition = "-570px"} = props
    return (
        <DiscWrapper size={size} width={width} bgposition={bgposition}>
            <div className="album-image">
                <img src={getSizeImg(info.picUrl, size)} alt="专辑封面"/>
                <a href="to" className="cover image_cover "> </a>
            </div>
            <div className="album-info">
                <div className="name text-nowrap" title={info.name}>{info.name}</div>
                <div className="artist text-nowrap" title={info.artist.name}>{info.artist.name}</div>
            </div>
        </DiscWrapper>
    )
})
