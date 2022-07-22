import {Map} from 'immutable'

import * as actionType from './constant'

const initState = Map({
    currentSong: {},        // 当前播放的歌曲
    currentSongIndex: 0,    // 当前播放歌曲在播放列表中的索引值
    songsList: [            // 播放列表
        {
            "name": "说客",
            "id": 1375920506,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 12174521,
                    "name": "音阙诗听",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 12503194,
                    "name": "新乐尘符",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 10,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 80218150,
                "name": "说客",
                "picUrl": "https://p2.music.126.net/DTfwf48BEF1wTCqjWp2kgA==/109951164192393040.jpg",
                "tns": [],
                "pic_str": "109951164192393040",
                "pic": 109951164192393040
            },
            "dt": 233333,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9336045,
                "vd": -35886
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5601645,
                "vd": -33322
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3734445,
                "vd": -31700
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8256,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 10,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 1416678,
            "mv": 0,
            "publishTime": 0
        },
        {
            "name": "特斯河之赞 (重新录制)",
            "id": 1496078703,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 106805,
                    "name": "九宝乐队",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 7,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 98418220,
                "name": "Awakening From Dukkha",
                "picUrl": "https://p1.music.126.net/Qj4TMvUezm4YAMN85CjaEg==/109951165476480136.jpg",
                "tns": [],
                "pic_str": "109951165476480136",
                "pic": 109951165476480130
            },
            "dt": 232342,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 9296501,
                "vd": -55623
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 5577918,
                "vd": -53113
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 3718626,
                "vd": -51785
            },
            "a": null,
            "cd": "01",
            "no": 5,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 7,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 1416971,
            "publishTime": 0
        },
        {
            "name": "无心斗艳",
            "id": 1367609755,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 12304113,
                    "name": "大布",
                    "tns": [],
                    "alias": []
                },
                {
                    "id": 0,
                    "name": "苏泽龙",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 14,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 79303409,
                "name": "无心斗艳",
                "picUrl": "https://p1.music.126.net/xdiVy-xDwYrP86q6TgmZ4g==/109951164508089024.jpg",
                "tns": [],
                "pic_str": "109951164508089024",
                "pic": 109951164508089020
            },
            "dt": 136923,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 5479489,
                "vd": -30004
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 3287711,
                "vd": -27445
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 2191822,
                "vd": -25825
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 14,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "mv": 0,
            "publishTime": 0
        }
    ],                      
    playMode: 0,            // 播放模式，顺序 0，随机 1，单曲循环 
    lyrics: [],             // 整首歌的歌词数组,
    realTimeLyric: "",      // 实时播放的一句歌词    
    isClose: false,         // 播放列表显隐
})

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionType.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.value);
        case actionType.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.value);
        case actionType.CHANGE_SONGS_LIST:
            return state.set("songsList", action.value);
        case actionType.CHANGE_PLAY_MODE:
            return state.set('playMode', action.value);
        case actionType.CHANGE_LYRICS:
            return state.set("lyrics", action.value);
        case actionType.CHANGE_REAL_TIME_LYRIC:
            return state.set("realTimeLyric", action.value);
        case actionType.CHANGE_IS_CLOSE:
            return state.set("isClose", action.value);
        default:
            return state;
    }
}

export {
    reducer,
}