import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';

const store = combineReducers({
  userStore: userReducer
})

export default createStore(store);