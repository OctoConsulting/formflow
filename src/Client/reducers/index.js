import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import getUserInfoReducer from './getUserInfo';


const rootReducer = combineReducers({
  form: formReducer,
  getUserInfo: getUserInfoReducer,
  auth: authReducer
})

export default rootReducer;
