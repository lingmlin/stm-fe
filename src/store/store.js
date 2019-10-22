import { createStore, combineReducers, applyMiddleware } from 'redux';
// import * as login from './login/reducer';
// import * as scrollBar from './scrollBar/reducer';
import * as userForm from './userForm/reducer';
import * as queue from './queue/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({ ...userForm, ...queue }),
  applyMiddleware(thunk)
);

export default store;
