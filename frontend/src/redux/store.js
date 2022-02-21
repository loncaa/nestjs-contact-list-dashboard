import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const appReducers = combineReducers({...reducers});
const middleware = [thunk, logger];

export const store = createStore(appReducers, compose(applyMiddleware(...middleware)));