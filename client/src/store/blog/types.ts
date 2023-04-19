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
} from "./actionTypes";

export interface BlogState {
  blogs: Blog[] | null;
  singleBlog: Blog | null;
  loading: boolean;
  errors: any;
}
//interface to define the shape of the payload object
//dispatched by the action creator getBlogsSuccess when the action type GET_BLOGS_SUCCESS is dispatched
//blogs property of payload object is set to an array of Blogs or null
export interface GetBlogsSuccessPayload {
  blogs: Blog[] | null;
}

export interface GetBlogsFailurePayload {
  errors: any;
}

/* Get Blogs */

export type GetBlogsRequest = {
  type: typeof GET_BLOGS_REQUEST;
  payload: {};
};
// this type is used to define the action object that is dispatched to the Redux store when the API call is successful.
export type GetBlogsSuccess = {
  type: typeof GET_BLOGS_SUCCESS;
  payload: GetBlogsSuccessPayload;
};

export type GetBlogsFailure = {
  type: typeof GET_BLOGS_FAILURE;
  payload: GetBlogsFailurePayload;
};

/* Get blog by id */

export type GetBlogByIdRequest = {
  type: typeof GET_BLOG_BY_ID_REQUEST;
  payload: string;
};

export type GetBlogByIdSuccess = {
  type: typeof GET_BLOG_BY_ID_SUCCESS;
  payload: Blog;
};

export type GetBlogByIdFailure = {
  type: typeof GET_BLOG_BY_ID_FAILURE;
  payload: any;
};

/* Create Blog */

export type CreateBlogRequest = {
  type: typeof CREATE_BLOG_REQUEST;
  payload: Object;
};

export type CreateBlogSuccess = {
  type: typeof CREATE_BLOG_SUCCESS;
  payload: Blog;
};

export type CreateBlogFailure = {
  type: typeof CREATE_BLOG_FAILURE;
  payload: any;
};

/* Update Blog */

export interface UpdateBlogRequestPayload {
  title: string;
  content: string;
  image: string;
}

export interface UpdateBlogFailurePayload {
  error: any;
}

export type UpdateBlogRequest = {
  type: typeof UPDATE_BLOG_REQUEST;
  payload: { id: string; data: UpdateBlogRequestPayload };
};

export type UpdateBlogSuccess = {
  type: typeof UPDATE_BLOG_SUCCESS;
  payload: Blog;
};

export type UpdateBlogFailure = {
  type: typeof UPDATE_BLOG_FAILURE;
  payload: UpdateBlogFailurePayload;
};

export type BlogAction =
  | GetBlogsRequest
  | GetBlogsSuccess
  | GetBlogsFailure
  | GetBlogByIdRequest
  | GetBlogByIdSuccess
  | GetBlogByIdFailure
  | CreateBlogRequest
  | CreateBlogSuccess
  | CreateBlogFailure
  | UpdateBlogRequest
  | UpdateBlogSuccess
  | UpdateBlogFailure;
