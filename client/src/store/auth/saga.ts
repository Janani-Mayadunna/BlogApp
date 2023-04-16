import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  // getCurrentUserFailure,
  // getCurrentUserSuccess,
  loginFailure,
  loginSuccess,
  setLoggedIn,
} from "./actions";

import { LOGIN_REQUEST } from "./actionTypes";
import { IAuth } from "./types";

const login = async (payload: { email: string; password: string }) => {
  try {
    const response = await axios.post<IAuth>(
      // "https://reqres.in/api/login",
      "http://localhost:8080/api/auth/login",
      { email: payload.email, password: payload.password }
    );
    const { token } = response.data;
    localStorage.setItem("jwt-blogapp", JSON.stringify(token));
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
    yield put(setLoggedIn(true));
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(loginFailure({ error: e.message }));
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
//     const response: AxiosResponse = yield call(
//       axios.get,
//       "http://localhost:8080/api/auth/currentuser",
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     );
//     if (response.data) {
//       yield put(setLoggedIn(true));
//       yield put(getCurrentUserSuccess());
//     } else {
//       yield put(setLoggedIn(false));
//       return;
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(getCurrentUserFailure(error));
//   }
// }

function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
  // yield takeLatest(GET_CURRENT_USER, getCurrentUserSaga);
}

export default authSaga;
