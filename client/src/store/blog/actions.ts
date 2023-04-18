import { Blog } from "../../interfaces/Blog";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOG_BY_ID_REQUEST,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_BY_ID_FAILURE,
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
