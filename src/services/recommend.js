import request from './request';

// 发现音乐-推荐页的网络请求
// 发送网络请求的函数，请求轮播图
export function getTopBanners() {
    return request({
        url: '/banner',
    })
}

// 请求热门推荐
export function getHotRecommend(limit) {
    return request({
        url: '/personalized',
        params: {
            limit,
        }
    })
}

// 请求新碟上架的数据
export function getNewDisc(limit) {
    return request({
        url: '/top/album',
        params: {
            limit,
        }
    })
}

// 请求排行榜的数据
export function getList(id) {
    return request({
        url: '/playlist/detail',
        params: {
            id,
        }
    })
}