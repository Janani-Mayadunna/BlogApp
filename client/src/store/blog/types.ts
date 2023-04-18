import { Blog } from "../../interfaces/Blog";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  GET_BLOG_BY_ID_REQUEST,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_BY_ID_FAILURE,
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

export type BlogAction =
  | GetBlogsRequest
  | GetBlogsSuccess
  | GetBlogsFailure
  | GetBlogByIdRequest
  | GetBlogByIdSuccess
  | GetBlogByIdFailure;
