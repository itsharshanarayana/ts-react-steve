import styles from './meat-department.module.css';
import React from "react";
import {connect} from "react-redux";
import {Food, FoodAction} from "@itsharshanarayana/redux-basics-store";
import RenderItems from "../render-items/render-items";
import {bindActionCreators} from "redux";
import {updateMeatInv} from "@itsharshanarayana/redux-basics-store";

/* eslint-disable-next-line */
interface MeatDepartmentProps {
  meatData: Food[];
  updateMeatInv: (operation: string, index: number) => FoodAction;
}

interface MeatDepartmentState {}

class MeatDepartment extends React.Component<MeatDepartmentProps, MeatDepartmentState> {

  /*renderMeatData = this.props.meatData.map((r, i) => {
    return (
      <div key={i}>
        <li>{r.food}: {r.quantity}</li>
      </div>
    );
  });*/

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


const mapStateToProps = (state: any) => {
  return {
    meatData: state.meat,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    updateMeatInv: updateMeatInv,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MeatDepartment);
