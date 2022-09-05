// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {Typography} from "@mui/material";
import {ReduxThunkUi} from "@itsharshanarayana/redux-thunk-ui";

export function App() {
  return (
    <>
      <Typography variant={'h4'}>Welcome to Redux Thunk!</Typography>
      <ReduxThunkUi />
    </>
  );
}

export default App;
