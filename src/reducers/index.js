import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import nameReducer from './nameReducer';

const reducers = combineReducers({
    nameReducer
})

export default createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
);