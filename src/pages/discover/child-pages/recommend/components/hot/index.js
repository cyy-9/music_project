import React, { memo, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import YYRecHeader from '@/components/recommend-header';
import YYSongsItem from '@/components/songs-item'
import {HotRecommendWrapper} from './style';
import {getHotRecommendAction} from '../../store/action';

export default memo(function YYHot() {
    const {hotRecommends} = useSelector(state => ({
        hotRecommends: state.get("recommendReducer").get("hotRecommend"),
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotRecommendAction(8));
    }, [dispatch])
    return (
        <HotRecommendWrapper>
            <YYRecHeader title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/> 
            <div className="recommend-list">
            {
                hotRecommends && hotRecommends.map((item, index) => {
                    return (
                        <YYSongsItem key={item.id} info={item}></YYSongsItem>
                    )
                })
            }
            </div>
        </HotRecommendWrapper>
    )
})
