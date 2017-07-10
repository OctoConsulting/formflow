import axios from 'axios';
import {browserHistory} from 'react-router';
import jwt from 'jwt-simple';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, USER_INFO, REQUEST_DATA} from './types';
import config from '../../Server/config';
const SERVER_URL = 'http://localhost:4000';

/*
###########################################################################
#                                                                         #
#                             Form Information                          #
#                                                                         #
###########################################################################
*/
export function signupUser({name, description, tags}){
  //returning function() -- product of redux-thunk -- usually ACTION CREATOR
  //only returns an object
  //Where all the logic goes
  //dispatch is the main pipeline where all data are passed into all reducers
  return function(dispatch){
    //Submit info to SERVER -- using promises
    console.log("working");
    axios.post(`${SERVER_URL}/signup`, { name, description, tags })
        .then(response => {
          dispatch({type: AUTH_USER})
        })

        .catch(error => {
          //If request is invalid:
          //   + Show an error to the user
          dispatch(authError(error.response));
        })
  }
}
export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export const requestData = () => {
  return {
    type: REQUEST_DATA
  };
};
