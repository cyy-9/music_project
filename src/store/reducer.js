// 用来合并所有的 reducer

// 没有使用 immutable的引入方式 import {combineReducers} from 'redux'

// 使用 immutable的引入方式
import {combineReducers} from 'redux'

import {reducer as recommendReducer} from '../pages/discover/child-pages/recommend/store/index';
import {reducer as playReducer} from '../pages/play/store/index';
import {loginReducer} from '../components/app-header/store/reducer';

const AllReducer = combineReducers({
    recommendReducer,
    playReducer,
    loginReducer,
});

export default AllReducer;