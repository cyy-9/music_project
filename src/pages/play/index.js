import React, { memo } from 'react'
import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight,
} from './style';

export default memo(function YYPlay() {
    return (
        <PlayerWrapper className="wrap-v2">
            <div className="content">
                <PlayerLeft></PlayerLeft>
                <PlayerRight></PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
