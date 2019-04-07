import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import nameReducer from './nameReducer';
import terminalReducer from './terminalReducer';

const reducers = combineReducers({
    nameReducer,
    terminalReducer
})

export default createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
);