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
export function signupUser({name, description, tags, methods, models}){
  //returning function() -- product of redux-thunk -- usually ACTION CREATOR
  //only returns an object
  //Where all the logic goes
  //dispatch is the main pipeline where all data are passed into all reducers
  return function(dispatch){
    //Submit info to SERVER -- using promises
    console.log("working");
    // var formData = new FormData();
    // var methodsJson = JSON.stringify(methods);
    // formData.append("methods", methodsJson);
    // formData.append("name", name);
    // formData.append("description", description);
    debugger;
    axios.post(`${SERVER_URL}/signup`, { name, description, tags, methods, models })
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
/*
###########################################################################
#                                                                         #
#                      USER INFORMATION RETRIEVAL                         #
#                                                                         #
###########################################################################
*/
export function retrievSubmittedFormById(id){
  return function(dispatch){
    const user_id =  id;

    axios.get(`${SERVER_URL}/user/${user_id}`)
        .then(response => {
          dispatch(sendUser(response.data));
        })
        .catch(() => dispatch(authError(response.error)))
  }
}


export function sendUser(response){
  return {
    type: USER_INFO,
    payload: response
  }
}
