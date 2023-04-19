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
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAILURE,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
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
  UpdateBlogRequestPayload,
  UpdateBlogFailurePayload,
  UpdateBlogRequest,
  UpdateBlogSuccess,
  UpdateBlogFailure,
  DeleteBlogRequest,
  DeleteBlogSuccess,
  DeleteBlogFailure,
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

/* Update blog */

export const updateBlogRequest = (
  id: string,
  data: UpdateBlogRequestPayload
): UpdateBlogRequest => ({
  type: UPDATE_BLOG_REQUEST,
  payload: {
    id,
    data,
  },
});

export const updateBlogSuccess = (payload: Blog): UpdateBlogSuccess => ({
  type: UPDATE_BLOG_SUCCESS,
  payload,
});

export const updateBlogFailure = (
  payload: UpdateBlogFailurePayload
): UpdateBlogFailure => ({
  type: UPDATE_BLOG_FAILURE,
  payload,
});

/* Delete blog */

export const deleteBlogRequest = (id: string): DeleteBlogRequest => ({
  type: DELETE_BLOG_REQUEST,
  payload: id,
});

export const deleteBlogSuccess = (payload: any): DeleteBlogSuccess => ({
  type: DELETE_BLOG_SUCCESS,
  payload: payload,
});

export const deleteBlogFailure = (error: any): DeleteBlogFailure => ({
  type: DELETE_BLOG_FAILURE,
  payload: error,
});
