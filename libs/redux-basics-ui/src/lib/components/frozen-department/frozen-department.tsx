import styles from './frozen-department.module.css';
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {Food} from "@itsharshanarayana/redux-basics-store";
import {FoodAction} from '@itsharshanarayana/redux-basics-store';
import {updateFrozenInv} from "@itsharshanarayana/redux-basics-store";
import RenderItems from "../render-items/render-items";

/* eslint-disable-next-line */
interface FrozenDepartmentProps {
  frozenData: Food[];
  updateFrozenInv: (operation: string, index: number) => FoodAction;
}

interface FrozenDepartmentState {
}

class FrozenDepartment extends React.Component<FrozenDepartmentProps, FrozenDepartmentState> {

  override render() {
    console.log("Frozen data in department:", this.props.frozenData);
    return (
      <div className={styles['container']}>
        <h1>Welcome to FrozenDepartment!</h1>
        <RenderItems
          data={this.props.frozenData}
          update={this.props.updateFrozenInv} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    frozenData: state.frozen,
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    updateFrozenInv: updateFrozenInv,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDepartment);
