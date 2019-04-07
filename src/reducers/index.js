import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import nameReducer from './nameReducer';
import terminalReducer from './terminalReducer';
import mVesselReducer from './mVesselReducer';

const reducers = combineReducers({
    nameReducer,
    terminalReducer,
    mVesselReducer
})

export default createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
);