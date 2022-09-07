// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {ReduxTsV01Ui} from "@itsharshanarayana/redux-ts-v01-ui";

export function App() {
  return (
    <>
      <div className={styles['container']}>
        <ReduxTsV01Ui/>
      </div>
    </>
  );
}

export default App;
