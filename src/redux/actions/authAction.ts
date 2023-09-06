import axios from 'axios';
import { Dispatch } from 'redux';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from '../types/authTypes';

export const loginUser = (credentials: { username: string; password: string }) => 
  authRequest('http://localhost:9000/login', credentials);

export const signupUser = (data: { username: string; password: string }) => 
  authRequest('http://localhost:9000/signup', data);

const authRequest = (endpoint: string, data: {}) => (dispatch: Dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  axios.post(endpoint, data)
    .then(response => {
      dispatch({ type: AUTH_SUCCESS, payload: response.data }); 
    })
    .catch(error => {
      dispatch({ type: AUTH_FAILURE, payload: error.message });
    });
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};