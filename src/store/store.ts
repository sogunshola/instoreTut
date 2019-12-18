import { userReducer } from './domains/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer,
  })
  