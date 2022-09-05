import styles from './post-list.module.css';
import {Typography} from "@mui/material";
import React from "react";
import {Post, PostListProps, PostListState} from "@itsharshanarayana/redux-thunk-types";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import fetchPosts from "../../../../redux-thunk-store/src/lib/action-creators/action-creators";
import PostCard from "../post-card/post-card";


/* eslint-disable-next-line */

class PostList extends React.Component<PostListProps, PostListState> {

  constructor(props: PostListProps) {
    super(props);
    this.props.fetchPosts();
  }

  override render() {
    //console.log('Number of posts:', this.props.posts.length);
    const renderedPosts = this.props.posts.map(
      (p, i) => {
        return (
          <PostCard key={i} post={p}/>
        );
      }
    );

    return (
      <div className={styles['container']}>
        <Typography variant={'h5'}>Welcome to PostList!</Typography>
        {renderedPosts}
      </div>
    );
  }

  override componentDidMount() {

  }

}

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchPosts: fetchPosts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
