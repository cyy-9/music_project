import React, { memo, useEffect, useRef } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {Carousel} from 'antd'

import YYRecHeader from '../../../../../../components/recommend-header';
import {NewDiscWrapper} from './style';
import {getNewDiscAction} from '../../store/action'
import YYDiscItem from '../../../../../../components/disc-item';

export default memo(function YYRecNewDisc() {
    const newDiscRef = useRef();
    const dispatch = useDispatch();
    const {newDisc} = useSelector(state => ({
        newDisc: state.get("recommendReducer").get("newDisc"),
    }), shallowEqual);
    useEffect(() => {
        dispatch(getNewDiscAction(10)); 
    }, [dispatch]);
    
    // 要求将数组 5个一组分为两组，对数组进行格式化
    const formatDisc = (arr) => {
        let arrOne = arr.length && arr.slice(0, 5);
        let arrTwo = arr.length && arr.slice(5, 10);
        return [arrOne, arrTwo];
    }
    // 点击按钮切换轮播
    const handlePrev = () => {
        newDiscRef.current.prev();
    }
    const handleNext = () => {
        newDiscRef.current.next();
    }
    return (
        <NewDiscWrapper>
            <YYRecHeader title="新碟上架"/>
            <div className="content">
                <button className="sprite_02 arrow arrow-left" 
                        onClick={handlePrev}
                        ></button>
                <div className="album">
                    <Carousel dots={false} ref={newDiscRef}>
                    {
                        formatDisc(newDisc).map((arr, i) => {
                            return (
                                <div className="page" key={i}>
                                {
                                    arr && arr.map((item, index) => {
                                        return (
                                            // <div key={item.id}>{item.name}</div>
                                            <YYDiscItem key={item.id}
                                                        info={item}
                                                        width={118}
                                                        size={100}
                                                        bgposition="-570px"/>
                                        )
                                    })
                                }
                                </div>
                            )
                        })
                    }
                    </Carousel>
                </div>
                <button className="sprite_02 arrow arrow-right"
                        onClick={handleNext}
                        ></button>
            </div>
        </NewDiscWrapper>
    )
})
