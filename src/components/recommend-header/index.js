import React, { memo } from 'react'
import {HeaderWrapper} from './style';
import { withRouter } from 'react-router';

function YYRecHeader(props) {
    const {title, keywords} = props;
    const handleClickMore = () => {
        props.history.push('/discover/songs');
    }
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                {
                    keywords && keywords.map((item, index) => {
                        return (
                            <div key={index} className="item">
                                <a href="to">{item}</a>
                                <span className="divider">|</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="right">
                <span onClick={handleClickMore}>更多</span>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
}

export default memo(withRouter(YYRecHeader));
