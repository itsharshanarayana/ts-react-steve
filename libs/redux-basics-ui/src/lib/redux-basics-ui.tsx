import styles from './redux-basics-ui.module.css';
import FrozenDepartment from "./components/frozen-department/frozen-department";
import MeatDepartment from "./components/meat-department/meat-department";
import ProduceDepartment from "./components/produce-department/produce-department";

/* eslint-disable-next-line */
export interface ReduxBasicsUiProps {}

export function ReduxBasicsUi(props: ReduxBasicsUiProps) {
  return (
    <div className={styles['container']}>
      <FrozenDepartment />
      <br/>
      <ProduceDepartment />
      <br/>
      <MeatDepartment />
    </div>
  );
}

export default ReduxBasicsUi;
