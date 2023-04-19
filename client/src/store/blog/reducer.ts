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

import { BlogAction, BlogState } from "./types";

const initialState: BlogState = {
  blogs: [],
  singleBlog: null,
  loading: false,
  errors: null,
};

const reducers = (state = initialState, action: BlogAction) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload.blogs,
        errors: null,
      };
    case GET_BLOGS_FAILURE:
      return {
        ...state,
        loading: false,
        blogs: null,
        errors: action.payload.errors,
      };
    case GET_BLOG_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOG_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        singleBlog: action.payload,
      };
    case GET_BLOG_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };
    case CREATE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
        blog: action.payload,
      };
    case CREATE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
      };
    case CREATE_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
      };
    case UPDATE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
        id: action.payload.id,
        data: action.payload.data,
        error: null,
      };
    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_BLOG_FAILURE:
      return {
        ...state,
        blog: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
};

export default reducers;
