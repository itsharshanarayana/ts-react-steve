import {PostsAction} from "./actions/actions";

export function reduxThunkTypes(): string {
  return 'redux-thunk-types';
}

export interface PostListProps {
  posts: Post[];
  fetchPosts: () => PostsAction;
}
export interface PostListState {}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum PostsTypes {
  FETCH_POSTS = 'FETCH_POSTS',
}
