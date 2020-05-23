import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import Thunk from "redux-thunk";

import postReducer from "./post";
import { client } from "../configureClient";

const initialState = {};

const rootReducer = combineReducers({
  post: postReducer,
});

const middleware = [logger, Thunk.withExtraArgument(client)];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
