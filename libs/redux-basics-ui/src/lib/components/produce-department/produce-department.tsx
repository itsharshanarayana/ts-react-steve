import styles from './produce-department.module.css';
import React from "react";
import {connect} from "react-redux";
import {Food, FoodAction, FoodState, updateProduceInv} from "@itsharshanarayana/redux-basics-store";
import RenderItems from "../render-items/render-items";
import {bindActionCreators, Dispatch} from "redux";

/* eslint-disable-next-line */
interface ProduceDepartmentProps {
  produceData: Food[];
  updateProduceInv: (operation: string, index: number) => FoodAction;
}
interface ProduceDepartmentState {}

class ProduceDepartment extends React.Component<ProduceDepartmentProps, ProduceDepartmentState> {

  override render() {
    return (
      <div className={styles['container']}>
        <h1>Welcome to ProduceDepartment!</h1>
        <RenderItems
          data={this.props.produceData}
          update={this.props.updateProduceInv}/>
      </div>
    );
  }
}

const mapStateToProps = (state: FoodState) => {
  return {
    produceData: state.produce,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<FoodAction>) => {
  return bindActionCreators({
    updateProduceInv: updateProduceInv,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDepartment);
