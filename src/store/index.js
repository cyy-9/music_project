import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import AllReducer from './reducer';

// 使 redux调试工具生效
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(AllReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;