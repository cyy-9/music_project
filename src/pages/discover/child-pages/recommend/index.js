import React, { memo } from 'react';

import YYTopBanner from './components/top-banner';
import YYHot from './components/hot';
import YYRecList from './components/list';
import YYRecNewDisc from './components/new-disc';
import HomeAcInfo from './components/home-acinfo';
import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight,
} from './style';


function YYRecommend(props) {

    return (
        <RecommendWrapper>
            <YYTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <YYHot></YYHot>
                    <YYRecNewDisc></YYRecNewDisc>
                    <YYRecList></YYRecList>
                </RecommendLeft>
                <RecommendRight>
                    <HomeAcInfo/>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(YYRecommend);