import styles from './ts-redux-ui.module.css';
import {Typography} from "@mui/material";
import RepositoriesList from "../components/repositories-list/repositories-list";

/* eslint-disable-next-line */
export interface TsReduxUiProps {
}

export function TsReduxUi(props: TsReduxUiProps) {
  return (
    <div className={styles['container']}>
      <Typography variant={'h4'} sx={{marginLeft: '15px'}}>Search for an NPM Package</Typography>
      <RepositoriesList/>
    </div>
  );
}

export default TsReduxUi;
