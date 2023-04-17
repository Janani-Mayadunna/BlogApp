import { Blog } from "../../interfaces/Blog";
import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
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

export type BlogAction = GetBlogsRequest | GetBlogsSuccess | GetBlogsFailure;

// export interface FetchBlogsRequestAction {
//   type: typeof FETCH_BLOGS_REQUEST;
// }

// export interface FetchBlogsSuccessAction {
//   type: typeof FETCH_BLOGS_SUCCESS;
//   payload: Blog[];
// }

// export interface FetchBlogsFailureAction {
//   type: typeof FETCH_BLOGS_FAILURE;
//   payload: any;
// }

// export interface FetchBlogRequestAction {
//   type: typeof FETCH_BLOG_REQUEST;
//   payload: string;
// }

// export interface FetchBlogSuccessAction {
//   type: typeof FETCH_BLOG_SUCCESS;
//   payload: Blog;
// }

// export interface FetchBlogFailureAction {
//   type: typeof FETCH_BLOG_FAILURE;
//   payload: any;
// }

// export interface UpdateBlogRequestAction {
//   type: typeof UPDATE_BLOG_REQUEST;
//   payload: Object | any;
// }

// export interface UpdateBlogSuccessAction {
//   type: typeof UPDATE_BLOG_SUCCESS;
//   payload: Blog;
// }

// export interface UpdateBlogFailureAction {
//   type: typeof UPDATE_BLOG_FAILURE;
//   payload: any;
// }

// export interface DeleteBlogRequestAction {
//   type: typeof DELETE_BLOG_REQUEST;
//   payload: string;
// }

// export interface DeleteBlogSuccessAction {
//   type: typeof DELETE_BLOG_SUCCESS;
//   payload: string;
// }

// export interface DeleteBlogFailureAction {
//   type: typeof DELETE_BLOG_FAILURE;
//   payload: any;
// }

// export interface CreateBlogRequestAction {
//   type: typeof CREATE_BLOG_REQUEST;
//   payload: Object;
// }

// export interface CreateBlogSuccessAction {
//   type: typeof CREATE_BLOG_SUCCESS;
//   payload: Blog;
// }

// export interface CreateBlogFailureAction {
//   type: typeof CREATE_BLOG_FAILURE;
//   payload: any;
// }
