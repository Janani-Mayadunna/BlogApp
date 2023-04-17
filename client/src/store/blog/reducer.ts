import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
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
    default:
      return { ...state };
  }
};

export default reducers;
