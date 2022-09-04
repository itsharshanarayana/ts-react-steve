// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {Typography} from "@mui/material";
import ReduxUi from "../../../../libs/redux-ui/src/lib/redux-ui";

export function App() {
  return (
    <>
      <Typography variant={'h4'}>Welcome to Redux!</Typography>
      <ReduxUi />
    </>
  );
}

export default App;
