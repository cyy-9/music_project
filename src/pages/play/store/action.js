import * as actionType from './constant';
import {
    getCurrentSong,
    getLyric,
} from '../../../services/play'
import {parseLyric} from '../../../utils/parse-lyric';

// 当前播放歌曲
const saveCurrentSongAction = (res) => {
    return {
        type: actionType.CHANGE_CURRENT_SONG,
        value: res,
    }
}
export const getCurrentSongAction = (id) => {
    return (dispatch, getState) => {
        if(!id) {
            return;
        }
        // 根据 id判断播放列表是否有此歌曲，如果没有再网络请求
        // 拿到播放列表
        const songsList = getState().playReducer.songsList;
        // 根据 id在列表中搜索，找到返回具体下标，没找到返回 -1
        const songIdex = songsList.findIndex((song) => {
            return song.id === id;
        });
        let song = null;
        if(songIdex === -1) {   // 没找到，网络请求歌曲信息
            getCurrentSong(id).then(res => {
                song = res.songs && res.songs[0];
                // 将请求到的新歌曲信息添加到播放列表末尾
                const newSongsList = [...songsList];
                newSongsList.push(song);

                // 更新 redux中的值
                // 修改播放列表
                dispatch(saveSongsListAction(newSongsList));
                // 当前播放歌曲的索引也要修改
                dispatch(saveCurrentSongIndexAction(newSongsList.length - 1));
                // 修改当前播放歌曲
                dispatch(saveCurrentSongAction(song));
                // 请求歌曲的歌词
                if(!song) return;
                dispatch(getLyricAction(song.id));
            }) 
        } else {    // 找到了，修改当前播放歌曲的索引 currentSongIndex，用 dispatch派发
            dispatch(saveCurrentSongIndexAction(songIdex));
            // 拿到刚添加播放列表的歌曲信息
            song = songsList[songIdex];
            // dispatch派发 action，修改当前播放歌曲
            dispatch(saveCurrentSongAction(song));
            // 请求歌曲的歌词
            if(!song) return;
            dispatch(getLyricAction(song.id));
        }
    }
}

// 当前歌曲索引，不是异步的，不需要 dispatch一个函数
const saveCurrentSongIndexAction = (index) => {
    return {
        type: actionType.CHANGE_CURRENT_SONG_INDEX,
        value: index,
    }
}

// 播放列表
export const saveSongsListAction = songsList => {
    return {
        type: actionType.CHANGE_SONGS_LIST,
        value: songsList,
    }
}

// 播放方式
export const savePlayModeAction = (mode) => {
    return {
        type: actionType.CHANGE_PLAY_MODE,
        value: mode,
    }
}

// 请求整首歌的歌词
const saveLyricAction = (lyrics) => {
    return {
        type: actionType.CHANGE_LYRICS,
        value: lyrics,
    }
}
export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            // 拿到解析后的歌词
            const lyricList = parseLyric(res.lrc.lyric);
            dispatch(saveLyricAction(lyricList));
        })
    }
}

// 实时的一句歌词
export const saveRealTimeLyricAction = (realTimeLyric) => {
    return {
        type: actionType.CHANGE_REAL_TIME_LYRIC,
        value: realTimeLyric,
    }
}

// 控制播放列表的显示隐藏
export const saveIsCloseAction = (isClose) => {
    return {
        type: actionType.CHANGE_IS_CLOSE,
        value: isClose,
    }
}
