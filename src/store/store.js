import { createStore, combineReducers, applyMiddleware } from 'redux';
// import * as login from './login/reducer';
// import * as scrollBar from './scrollBar/reducer';
import * as userForm from './userForm/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({ ...userForm }),
  applyMiddleware(thunk)
);

export default store;
