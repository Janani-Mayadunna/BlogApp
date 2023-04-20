
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
} from "./actionTypes";


export interface IAuth {
  token: string;
}

export interface AuthState {
  pending: boolean;
  error: string | null;
  token: string;
  isLoggedIn: boolean;
}

//Login payload interfaces

export interface LoginPayload {
  values: {
    email: string;
    password: string;
  };
  // callback: any;
}

export interface LoginSuccessPayload {
  token: string;
}

export interface LoginFailurePayload {
  error: string;
}

//Logout payload interfaces

export interface LogoutRequestPayload {}

export interface LogoutSuccessPayload {}

export interface LogoutFailurePayload {
  error: any;
}

//types logout

export type LogoutRequest = {
  type: typeof LOGOUT_REQUEST;
  payload: LogoutRequestPayload;
};

export type LogoutSuccess = {
  type: typeof LOGOUT_SUCCESS;
  payload: LogoutSuccessPayload;
};

export type LogoutFailure = {
  type: typeof LOGOUT_FAILURE;
  payload: LogoutFailurePayload;
};

//types login


export type LoginRequest = {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
};

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

/* get current user */
export type GetCurrentuser = {
  type: typeof GET_CURRENT_USER;
  payload: {};
};

export type GetCurrentuserSuccess = {
  type: typeof GET_CURRENT_USER_SUCCESS;
};

export type GetCurrentuserFailure = {
  type: typeof GET_CURRENT_USER_FAILURE;
  payload: { error: string };
};

export type AuthAction =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | LogoutRequest
  | LogoutSuccess
  | LogoutFailure
  | GetCurrentuser
  | GetCurrentuserSuccess
  | GetCurrentuserFailure;

