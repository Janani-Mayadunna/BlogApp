import { call, put, takeLatest } from "redux-saga/effects";

import {
  getBlogsRequest,
  getBlogsSuccess,
  getBlogsFailure,
  getBlogByIdSuccess,
  getBlogByIdFailure,
} from "./actions";

import { Blog } from "../../interfaces/Blog";
import { GET_BLOGS_REQUEST, GET_BLOG_BY_ID_REQUEST } from "./actionTypes";
// import axios from "axios";

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

const fetchBlogById = async (id: string) => {
  console.log("ID here : ", id);
  const response = await fetch(`http://localhost:8080/api/blogs/blog/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export function* fetchSingleBlogSaga(action: {
  type: string;
  payload: string;
}) {
  try {
    const blog: Blog = yield call(fetchBlogById, action.payload);
    console.log("Payload: ", action.payload);
    yield put(getBlogByIdSuccess(blog));
    console.log("Generator fine!!!");
  } catch (error: any) {
    yield put(getBlogByIdFailure({ errors: error.message }));
    console.log("Generator error!!!");
  }
}

function* blogsSaga() {
  yield takeLatest(GET_BLOGS_REQUEST, fetchBlogsSaga);
  yield takeLatest(GET_BLOG_BY_ID_REQUEST, fetchSingleBlogSaga);
}

export default blogsSaga;
