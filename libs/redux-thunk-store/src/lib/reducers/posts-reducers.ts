import {Post, PostsTypes} from "@itsharshanarayana/redux-thunk-types";
import {PostsAction} from "../../../../redux-thunk-types/src/lib/actions/actions";


export const postsReducer = (state: Post[] = [], action: PostsAction): Post[] => {
  //console.log('postReducer: payload:', action.payload)
  switch (action.type) {
    case PostsTypes.FETCH_POSTS:
      const newState: Post[] = [...state, ...action.payload];
      return newState;
    default:
      return state;
  }

};

export default postsReducer;
