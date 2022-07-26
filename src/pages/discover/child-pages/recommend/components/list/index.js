import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

import YYRecHeader from '../../../../../../components/recommend-header';
import {ListWrapper} from './style';
import {getListAction} from '../../store/action'
import YYTopRanking from '../../../../../../components/top-ranking'

export default memo(function YYRecList() {
    // 飙升榜id 19723756
    // 新歌榜id 3779629
    // 原创榜id 2884035
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListAction(19723756));
        dispatch(getListAction(3779629));
        dispatch(getListAction(2884035));
    }, [dispatch])
    const {soarList, newList, originList} = useSelector(state => ({
        soarList: state.get('recommendReducer').get('soarList'),
        newList: state.get('recommendReducer').get('newList'),
        originList: state.get('recommendReducer').get('originList'),
    }), shallowEqual);
    return (
        <ListWrapper>
            <YYRecHeader title="榜单"/>
            <div className="tops">
                <YYTopRanking info={soarList}/>    
                <YYTopRanking info={newList}/>    
                <YYTopRanking info={originList}/>    
            </div>
        </ListWrapper>
    )
})
