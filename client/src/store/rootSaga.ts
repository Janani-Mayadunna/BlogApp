import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import blogsSaga from "./blog/saga";

export function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(blogsSaga)]);
}
