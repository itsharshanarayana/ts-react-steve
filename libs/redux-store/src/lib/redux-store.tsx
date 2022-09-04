import styles from './redux-store.module.css';

/* eslint-disable-next-line */
export interface ReduxStoreProps {}

export function ReduxStore(props: ReduxStoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReduxStore!</h1>
    </div>
  );
}

export default ReduxStore;
