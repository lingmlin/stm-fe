import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as login from './login/reducer';
import * as scrollBar from './scrollBar/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({ ...login, ...scrollBar }),
  applyMiddleware(thunk)
);

export default store;
