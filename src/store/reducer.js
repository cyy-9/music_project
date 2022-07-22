// 用来合并所有的 reducer

// 没有使用 immutable的引入方式 import {combineReducers} from 'redux'

// 使用 immutable的引入方式
import {combineReducers} from 'redux-immutable'

import {reducer as recommendReducer} from '../pages/discover/child-pages/recommend/store/index';
import {reducer as playReducer} from '../pages/play/store/index';

const AllReducer = combineReducers({
    recommendReducer,
    playReducer,
});

export default AllReducer;