import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

import YYRecHeader from '@/components/recommend-header';
import {ListWrapper} from './style';
import {getListAction} from '../../store/action'
import YYTopRanking from '@/components/top-ranking'

export default memo(function YYRecList() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListAction(0));
        dispatch(getListAction(2));
        dispatch(getListAction(3));
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
