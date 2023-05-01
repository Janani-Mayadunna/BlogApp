import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  getCurrentUserFailure,
  getCurrentUserSuccess,
  // getCurrentUserFailure,
  // getCurrentUserSuccess,
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  setLoggedIn,
} from "./actions";

import { GET_CURRENT_USER, LOGIN_REQUEST, LOGOUT_REQUEST } from "./actionTypes";
import { IAuth } from "./types";
import { useAppDispatch } from "../store";

const login = async (payload: { email: string; password: string }) => {
  try {
    const response = await fetch("http://localhost:8090/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });
    const { token } = await response.json();
    localStorage.setItem("jwt-blogapp", JSON.stringify(token));
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    window.location.reload();
    console.log("Successfully Logged In!");
    console.log(token);

    return token;
  } catch (error) {
    console.log(error);
  }
};

function* loginSaga(action: any) {
  try {
    const response: { token: string } = yield call(login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });

    yield put(loginSuccess({ token: response.token }));
  } catch (e: any) {
    yield put(loginFailure({ error: e.message }));
  }
}

function* logoutSaga() {
  try {
    const token = localStorage.removeItem("jwt-blogapp");
    localStorage.setItem("isLoggedIn", JSON.stringify(false));

    yield put(logoutSuccess());
    window.location.reload();
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

// function* getCurrentUserSaga() {
//   try {
//     const token = JSON.parse(localStorage.getItem("jwt-blogapp")!);
//     if (!token) {
//       yield put(setLoggedIn(false));
//       console.log("No token found!");
//       return;
//     }
//     yield call(axios.get, "http://localhost:8090/api/auth/currentuser", {
//       headers: {
//         Authorization: token,
//       },
//     });
//     if (token) {
//       localStorage.setItem("isLoggedIn", JSON.stringify(true));

//       console.log("Token found", token);
//       yield put(getCurrentUserSuccess());
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(getCurrentUserFailure(error));
//     localStorage.setItem("isLoggedIn", JSON.stringify(false));
//   }
// }

function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);

  // yield takeLatest(GET_CURRENT_USER, getCurrentUserSaga);
}

export default authSaga;
