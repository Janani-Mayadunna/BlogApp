import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export interface IAuth {
  token: string;
}

export interface AuthState {
  pending: boolean;
  error: string | null;
  token: string;
  isLoggedIn: boolean;
}

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

export type LoginRequest = {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
};

//types

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export type AuthAction = LoginRequest | LoginSuccess | LoginFailure;
