import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/root';
import tron from './reactotron';

const initialState = {};

const enhancers = [];

// eslint-disable-next-line no-undef
if (__DEV__) {
  enhancers.push(tron.createEnhancer());
}

const middleware = [thunk];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
