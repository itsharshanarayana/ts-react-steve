import styles from './meat-department.module.css';
import React from "react";
import {connect} from "react-redux";
import {Food, FoodAction, FoodState} from "@itsharshanarayana/redux-basics-store";
import RenderItems from "../render-items/render-items";
import {bindActionCreators, Dispatch} from "redux";
import {updateMeatInv} from "@itsharshanarayana/redux-basics-store";

/* eslint-disable-next-line */
interface MeatDepartmentProps {
  meatData: Food[];
  updateMeatInv: (operation: string, index: number) => FoodAction;
}

interface MeatDepartmentState {}

class MeatDepartment extends React.Component<MeatDepartmentProps, MeatDepartmentState> {
  override render() {
    return (
      <div className={styles['container']}>
        <h1>Welcome to MeatDepartment!</h1>
        <RenderItems
          data={this.props.meatData}
          update={this.props.updateMeatInv} />
      </div>
    );
  }
}


const mapStateToProps = (state: FoodState) => {
  return {
    meatData: state.meat,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<FoodAction>) => {
  return bindActionCreators({
    updateMeatInv: updateMeatInv,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MeatDepartment);
