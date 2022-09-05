import {Post, PostsTypes} from "@itsharshanarayana/redux-thunk-types";

export interface Payload {
  posts: Post[];
}

export interface Action {
  type: string;
  payload?: Payload;
}

export interface PostsAction {
  type: PostsTypes.FETCH_POSTS,
  payload: Post[]
}
