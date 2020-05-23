import { createAsyncAction } from "typesafe-actions";
import { Post } from "../../types/post";
import { ApolloError } from "apollo-client";

export const GET_POST = "post/GET_POST";
export const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
export const GET_POST_ERROR = "post/GET_POST_ERROR";

type GetPostErrorType = {
  id: string;
  error: ApolloError;
};

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR
)<string, Post, GetPostErrorType>();
