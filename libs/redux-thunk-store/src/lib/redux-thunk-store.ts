import {combineReducers} from "redux";
import postsReducer from "./reducers/posts-reducers";


export function reduxThunkStore(): string {
  return 'redux-thunk-store';
}

export const reducers = combineReducers({
  posts: postsReducer,
});

