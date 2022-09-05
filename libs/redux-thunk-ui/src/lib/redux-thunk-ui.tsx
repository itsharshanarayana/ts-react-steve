import styles from './redux-thunk-ui.module.css';
import PostList from "../components/post-list/post-list";
import React from "react";

/* eslint-disable-next-line */
export interface ReduxThunkUiProps {}

export const ReduxThunkUi: React.FC<ReduxThunkUiProps> = (props) => {
  return (
    <div className={styles['container']}>
      <PostList />
    </div>
  );
}

export default ReduxThunkUi;
