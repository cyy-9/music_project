import {Map} from 'immutable'

import * as actionTypes from './constant';

const initState = Map({     // 调用 Map返回一个 immutable类型的对象
    topBanners: [],     // 轮播图数据
    hotRecommend: [],   // 热门推荐数据
    newDisc: [],        // 新碟上架数据
    soarList: {},       // 排行榜-飙升榜
    newList: {},        // 排行榜-新歌榜
    originList: {},     // 排行榜-原创榜
})

function reducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            // return {...state, topBanners: action.value};
            return state.set("topBanners", action.value);   // 返回一个 immutable类型的对象
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommend", action.value);
        case actionTypes.CHANGE_NEW_DISC:
            return state.set("newDisc", action.value);
        case actionTypes.CHANGE_SOAR_LIST:
            return state.set("soarList", action.value);
        case actionTypes.CHANGE_NEW_LIST:
            return state.set("newList", action.value);
        case actionTypes.CHANGE_ORIGIN_LIST:
            return state.set("originList", action.value);
        default:
            return state;
    }
}

export default reducer;