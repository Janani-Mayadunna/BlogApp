import { Blog } from "../../interfaces/Blog";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOG_BY_ID_REQUEST,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_BY_ID_FAILURE,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAILURE,
} from "./actionTypes";

import {
  GetBlogsSuccessPayload,
  GetBlogsFailurePayload,
  GetBlogsRequest,
  GetBlogsSuccess,
  GetBlogsFailure,
  GetBlogByIdRequest,
  GetBlogByIdSuccess,
  GetBlogByIdFailure,
  CreateBlogRequest,
  CreateBlogSuccess,
  CreateBlogFailure,
} from "./types";

/* Get blogs */

export const getBlogsRequest = (): GetBlogsRequest => ({
  type: GET_BLOGS_REQUEST,
  payload: {},
});

export const getBlogsSuccess = (
  payload: GetBlogsSuccessPayload
): GetBlogsSuccess => ({
  type: GET_BLOGS_SUCCESS,
  payload,
});

export const getBlogsFailure = (
  payload: GetBlogsFailurePayload
): GetBlogsFailure => ({
  type: GET_BLOGS_FAILURE,
  payload,
});

/* Get blog by id */

export const getBlogByIdRequest = (payload: string): GetBlogByIdRequest => ({
  type: GET_BLOG_BY_ID_REQUEST,
  payload,
});

export const getBlogByIdSuccess = (singleBlog: Blog): GetBlogByIdSuccess => ({
  type: GET_BLOG_BY_ID_SUCCESS,
  payload: singleBlog,
});

export const getBlogByIdFailure = (error: any): GetBlogByIdFailure => ({
  type: GET_BLOG_BY_ID_FAILURE,
  payload: error,
});

/* Create blog */

export const createBlogRequest = (payload: Object): CreateBlogRequest => ({
  type: CREATE_BLOG_REQUEST,
  payload,
  // payload:object,
});

export const createBlogSuccess = (payload: Blog): CreateBlogSuccess => ({
  type: CREATE_BLOG_SUCCESS,
  payload,
});

export const createBlogFailure = (payload: any): CreateBlogFailure => ({
  type: CREATE_BLOG_FAILURE,
  payload,
});
