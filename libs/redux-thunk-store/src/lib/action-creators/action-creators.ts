import {getClient} from "@itsharshanarayana/api-services";
import {ApiClientTypes} from "@itsharshanarayana/widgets-types";
import {Post, PostsTypes} from "@itsharshanarayana/redux-thunk-types";
import {PostsAction} from "../../../../redux-thunk-types/src/lib/actions/actions";

// @ts-ignore
export const fetchPosts = (): PostsAction => async (dispatch: any): PostsAction => {
  const response = await getClient(ApiClientTypes.JSONPLACEHOLDER_CLIENT).get('/posts');

  //console.log('fetchPosts: response data:', response.data);
  const postsData: Post[] = response.data;
  //const uniqueData = new Set(postsData);
  //console.log('fetchPosts: uniqueData:', uniqueData);
  //const posts = [...uniqueData];
  //console.log('fetchPosts: posts:', posts);
  //if (postsData.length === 0) {
  dispatch({
    type: PostsTypes.FETCH_POSTS,
    payload: postsData
  });
  //}
};


export default fetchPosts;
