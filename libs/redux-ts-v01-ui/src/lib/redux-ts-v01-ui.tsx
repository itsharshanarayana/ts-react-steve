import styles from './redux-ts-v01-ui.module.css';
import {Typography} from "@mui/material";
import React from "react";
import Search from "./components/search/search";

/* eslint-disable-next-line */
export interface ReduxTsV01UiProps {}

export const ReduxTsV01Ui: React.FC<ReduxTsV01UiProps> = (props) => {
  return (
    <div className={styles['container']}>
      <Search />
    </div>
  );
}

export default ReduxTsV01Ui;
