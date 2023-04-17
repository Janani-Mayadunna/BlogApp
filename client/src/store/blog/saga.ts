import { call, put, takeLatest } from "redux-saga/effects";

import { getBlogsRequest, getBlogsSuccess, getBlogsFailure } from "./actions";

import { Blog } from "../../interfaces/Blog";
import { GET_BLOGS_REQUEST } from "./actionTypes";

const fetchBlogs = async () => {
  const response = await fetch("http://localhost:8080/api/blogs");
  const data = await response.json();
  return data;
};

export function* fetchBlogsSaga() {
  try {
    const blogs: Blog[] = yield call(fetchBlogs);
    yield put(getBlogsSuccess({ blogs }));
  } catch (error: any) {
    yield put(getBlogsFailure({ errors: error.message }));
  }
}

function* blogsSaga() {
  yield takeLatest(GET_BLOGS_REQUEST, fetchBlogsSaga);
}

export default blogsSaga;
