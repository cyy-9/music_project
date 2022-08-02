// 播放歌曲相关数据请求

import request from './request';

export const getCurrentSong = (ids) => {
    return request({
        url: '/song/detail',
        params: {
            ids,
            cookie: localStorage.getItem('cookie'),
        }
    })
}

export const getLyric = (id) => {
    return request({
        url: '/lyric',
        params: {
            id,
        }
    })
}