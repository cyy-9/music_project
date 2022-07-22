import React, { memo, useEffect, useRef, useCallback, useState} from 'react'
import {useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Carousel } from 'antd';

import {getTopBannerAction} from '../../store/action'

import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl,
} from './style'

export default memo(function YYTopBanner() {
    const [bannerCurrent, setBannerCurrent] = useState(0);
    // // props中保存了 redux中的数据
    // const {getBanners, topBanners} = props; 
    // console.log(topBanners)
    // useEffect(() => {
    //     getBanners();
    // }, [getBanners]);

    // 通过这个 hooks拿到 redux中的数据，类似 mapStateToProps中数据获取方式
    const {topBanners} = useSelector(state => ({
        // topBanners: state.recommendReducer.topBanners,
        // 在 state中获取数据的方式发生变化

        // 在 state中先获取 recommendReducer的属性值，再获取 topBanners的属性值
        topBanners: state.get("recommendReducer").get("topBanners"),
        // 另一种写法
        // 传入一个数组，按照数组元素的顺序深入对象拿到属性值
        // topBanners: state.getIn(["recommendReducer", "topBanners"])
    }), shallowEqual)

    const dispatch = useDispatch(); // 通过这个 hooks拿到 dispatch

    const bannerRef = useRef();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);

    // 两个箭头事件处理程序
    const handlePrev = () => {
        // ref拿到轮播组件
        bannerRef.current.prev();
    }

    const handleNext = () => {
        bannerRef.current.next();
    }

    const bannerChange = useCallback((from, to) => {
        // console.log(123);
        setBannerCurrent(to);
    }, [])

    const bgImage = topBanners[bannerCurrent] && topBanners[bannerCurrent].imageUrl;

    return (
        <BannerWrapper bgImage={bgImage + '?imageView&blur=40x20'}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay={true} ref={bannerRef} beforeChange={bannerChange}>
                    {
                        topBanners.map((item, index) => {
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img src={item.imageUrl} className="image" alt={item.typeTitle}/>
                                </div>
                            )
                        })
                    }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={handlePrev}></button>
                    <button className="btn right" onClick={handleNext}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

// const mapStateToProps = (state) => {
//     return {
//         topBanners: state.recommendReducer.topBanners
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getBanners: () => {
//             dispatch(getTopBannerAction())
//         }
//     }
// }
