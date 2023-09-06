// authActions.ts

import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/authReducer';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: User;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = SignupSuccessAction | LoginSuccessAction | LogoutAction;

export interface User {
  // Define your user properties here
  username: string;
  // Add more properties as needed
}

export const signupSuccess = (user: User): SignupSuccessAction => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const loginSuccess = (user: User): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

// Async action for signup
export const signup = (
  userData: any
): ThunkAction<void, RootState, null, AuthActionTypes> => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post<User>('http://localhost:9000/auth/signup', userData);
    dispatch(signupSuccess(response.data));
  } catch (error) {
    // Handle signup error
  }
};

// Async action for login
export const login = (
  userData: any
): ThunkAction<void, RootState, null, AuthActionTypes> => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post<User>('http://localhost:9000/auth/login', userData);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    // Handle login error
  }
};
