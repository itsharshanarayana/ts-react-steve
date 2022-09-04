import styles from './redux-ui.module.css';
import FrozenDept from "../components/frozen-dept/frozen-dept";
import ProduceDept from "../components/produce-dept/produce-dept";
import MeatDept from '../components/meat-dept/meat-dept';
import {FrozenAction} from "../../../redux-101-types/src/lib/actions/FrozenAction";
import {ProduceAction} from "../../../redux-101-types/src/lib/actions/ProduceAction";
import {MeatAction} from "../../../redux-101-types/src/lib/actions/MeatAction";

/* eslint-disable-next-line */
export interface ReduxUiProps {}

const ReduxUi: React.FC<ReduxUiProps> = (props) => {
  return (
    <div className={styles['container']}>
      <FrozenDept data={[]} frozenInvUpdate={function (operation: string, index: number): FrozenAction {
        throw new Error('Function not implemented.');
      }} />
      <hr/>
      <ProduceDept data={[]} produceInvUpdate={function (operation: string, index: number): ProduceAction {
        throw new Error('Function not implemented.');
      }} />
      <hr/>
      <MeatDept data={[]} meatInvUpdate={function (operation: string, index: number): MeatAction {
        throw new Error('Function not implemented.');
      }} />
    </div>
  );
}

export default ReduxUi;
