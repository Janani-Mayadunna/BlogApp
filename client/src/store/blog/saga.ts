import { call, put, takeLatest } from "redux-saga/effects";

import {
  getBlogsRequest,
  getBlogsSuccess,
  getBlogsFailure,
  getBlogByIdSuccess,
  getBlogByIdFailure,
  createBlogSuccess,
  createBlogFailure,
} from "./actions";

import { Blog } from "../../interfaces/Blog";
import {
  CREATE_BLOG_REQUEST,
  GET_BLOGS_REQUEST,
  GET_BLOG_BY_ID_REQUEST,
} from "./actionTypes";
import { CreateBlogFailure, CreateBlogRequest } from "./types";
import axios from "axios";

/* Get blogs */

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

/* Get blog by id */

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

/* Create blog */

const createBlog = async (payload: Object) => {
  const response = await axios.post<Blog>(
    "http://localhost:8080/api/blogs/blog",
    payload
  );
  return response.data;
};

export function* createBlogSaga(action: CreateBlogRequest) {
  try {
    const response: Blog = yield call(createBlog, action.payload);
    yield put(createBlogSuccess(response));
  } catch (error: any) {
    yield put(createBlogFailure({ errors: error.message }));
  }
}

function* blogsSaga() {
  yield takeLatest(GET_BLOGS_REQUEST, fetchBlogsSaga);
  yield takeLatest(GET_BLOG_BY_ID_REQUEST, fetchSingleBlogSaga);
  yield takeLatest(CREATE_BLOG_REQUEST, createBlogSaga);
}

export default blogsSaga;
