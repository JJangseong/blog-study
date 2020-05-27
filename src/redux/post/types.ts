import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { Post } from "../../types/post";

export type PostAction = ActionType<typeof actions>;
export type PostState = {
  post: {
    [id: string]: {
      loading: boolean;
      data: Post | null;
      error: Error | null;
    };
  };
};