import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_LOGGED_IN,
  // GET_CURRENT_USER,
  // GET_CURRENT_USER_SUCCESS,
  // GET_CURRENT_USER_FAILURE,
} from "./actionTypes";

import {
  LoginPayload,
  LoginSuccessPayload,
  LoginFailurePayload,
  LoginRequest,
  LoginSuccess,
  LoginFailure,
} from "./types";

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
});

export const setLoggedIn = (isLoggedIn: boolean) => ({
  type: SET_LOGGED_IN,
  payload: isLoggedIn,
});

// export const getCurrentUser = (payload: any) => ({
//   type: GET_CURRENT_USER,
//   payload,
// });

// export const getCurrentUserSuccess = () => ({
//   type: GET_CURRENT_USER_SUCCESS,
// });

// export const getCurrentUserFailure = (error: any) => ({
//   type: GET_CURRENT_USER_FAILURE,
//   payload: error,
// });
