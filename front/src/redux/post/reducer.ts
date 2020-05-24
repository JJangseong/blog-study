import { PostState, PostAction } from "./types";
import { createReducer } from "typesafe-actions";
import { GET_POST, GET_POST_SUCCESS, GET_POST_ERROR } from "./actions";

const initialState: PostState = {
  post: {},
};

const postReducer = createReducer<PostState, PostAction>(initialState, {
  [GET_POST]: (state, action) => ({
    ...state,
    post: {
      ...state.post,
      [action.payload]: {
        loading: true,
        error: null,
        data: null,
      },
    },
  }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    post: {
      ...state.post,
      [action.payload.id as string]: {
        loading: false,
        error: null,
        data: action.payload,
      },
    },
  }),
  [GET_POST_ERROR]: (state, action) => ({
    ...state,
    post: {
      [action.payload.id]: {
        loading: false,
        error: action.payload.error,
        data: null,
      },
    },
  }),
});

export default postReducer;