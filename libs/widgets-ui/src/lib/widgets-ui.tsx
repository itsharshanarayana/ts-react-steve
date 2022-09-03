import styles from './widgets-ui.module.css';

/* eslint-disable-next-line */
export interface WidgetsUiProps {}

export function WidgetsUi(props: WidgetsUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WidgetsUi!</h1>
    </div>
  );
}

export default WidgetsUi;
