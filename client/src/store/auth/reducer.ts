import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  pending: false,
  error: null,
  token: "",
  isLoggedIn: false,
};

const reducers = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        token: action.payload.token,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        token: "",
        error: action.payload.error,
        isLoggedIn: false,
      };
    default:
      return { ...state };
  }
};

export default reducers;
