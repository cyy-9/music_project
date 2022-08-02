import * as actionType from './constant';

import {
    getTopBanners, 
    getHotRecommend,
    getNewDisc,
    getList,
} from '../../../../../services/recommend.js';

// 修改 redux中状态的 action对象 轮播
const saveTopBannersAction = (res) => {
    return {
        type: actionType.CHANGE_TOP_BANNERS,
        value: res.banners,
    }
}   

// 异步请求数据的 action 轮播图数据
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(saveTopBannersAction(res))
        })
    }
}
// 热门推荐
const saveHotRecommendAction = (res) => {
    return {
        type: actionType.CHANGE_HOT_RECOMMEND,
        value: res.result,
    }
}
export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            dispatch(saveHotRecommendAction(res));
        })
    }
}

// 新碟上架
const saveNewDiscAction = (res) => {
    return {
        type: actionType.CHANGE_NEW_DISC,
        value: res.albums,
    }
}

export const getNewDiscAction = (limit) => {
    return (dispatch) => {
        getNewDisc(limit).then(res => {
            dispatch(saveNewDiscAction(res));
        })
    }
}

// 排行榜
const saveSoarListAction = (res) => {
    return {
        type: actionType.CHANGE_SOAR_LIST,
        value: res.playlist,
    }
}
const saveNewListAction = (res) => {
    return {
        type: actionType.CHANGE_NEW_LIST,
        value: res.playlist,
    }
}
const saveOriginListAction = (res) => {
    return {
        type: actionType.CHANGE_ORIGIN_LIST,
        value:res.playlist,
    }
}
export const getListAction = (id) => {
    return (dispatch) => {
        getList(id).then(res => {
            console.log(res.data)
            switch(id) {
                case 19723756:
                    dispatch(saveSoarListAction(res.data));
                    break;
                case 3779629:
                    dispatch(saveNewListAction(res.data));
                    break;
                case 2884035:
                    dispatch(saveOriginListAction(res.data));
                    break;
                default:
                    break;
            }
        })
    }
}