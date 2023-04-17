import {
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
} from "./actionTypes";

import {
  GetBlogsSuccessPayload,
  GetBlogsFailurePayload,
  GetBlogsRequest,
  GetBlogsSuccess,
  GetBlogsFailure,
} from "./types";

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
