import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as ducks from './ducks';

const reducers = combineReducers(ducks);

export default createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
    ),
);
