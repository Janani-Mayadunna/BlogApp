import { call, put, takeLatest } from "redux-saga/effects";

import {
  getBlogsRequest,
  getBlogsSuccess,
  getBlogsFailure,
  getBlogByIdSuccess,
  getBlogByIdFailure,
  createBlogSuccess,
  createBlogFailure,
  updateBlogSuccess,
  updateBlogFailure,
} from "./actions";

import { Blog } from "../../interfaces/Blog";
import {
  CREATE_BLOG_REQUEST,
  GET_BLOGS_REQUEST,
  GET_BLOG_BY_ID_REQUEST,
  UPDATE_BLOG_REQUEST,
} from "./actionTypes";
import {
  CreateBlogFailure,
  CreateBlogRequest,
  UpdateBlogRequest,
  UpdateBlogRequestPayload,
} from "./types";
import axios from "axios";

/* Get blogs */

const fetchBlogs = async () => {
  const response = await fetch("http://localhost:8090/api/blogs");
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
  const response = await fetch(`http://localhost:8090/api/blogs/blog/${id}`, {
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
    "http://localhost:8090/api/blogs/blog",
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

/* Update blog */

const updateBlog = async (id: string, data: UpdateBlogRequestPayload) => {
  const response = await axios.put<Blog>(
    `http://localhost:8090/api/blogs/blog/${id}`,
    data
  );
  return response.data;
};

export function* updateBlogSaga(action: UpdateBlogRequest) {
  try {
    console.log("generator response payload: ", action.payload);
    console.log("generator response id: ", action.payload.id);

    const { id, ...rest } = action.payload;
    console.log("generator response rest: ", rest);

    const response: Blog = yield call(
      updateBlog,
      action.payload.id,
      action.payload.data
    );
    console.log("generator response: ", response);
    yield put(updateBlogSuccess(response));
  } catch (error: any) {
    yield put(updateBlogFailure({ error: error.message }));
    console.log("generator error: ", error);
  }
}

function* blogsSaga() {
  yield takeLatest(GET_BLOGS_REQUEST, fetchBlogsSaga);
  yield takeLatest(GET_BLOG_BY_ID_REQUEST, fetchSingleBlogSaga);
  yield takeLatest(CREATE_BLOG_REQUEST, createBlogSaga);
  yield takeLatest(UPDATE_BLOG_REQUEST, updateBlogSaga);
}

export default blogsSaga;
