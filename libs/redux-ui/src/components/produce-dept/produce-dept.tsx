import styles from './produce-dept.module.css';
import {Typography} from "@mui/material";
import {Food, ProduceDeptProps, ProduceDeptState, StoreState} from "@itsharshanarayana/redux-101-types";
import {connect} from "react-redux";
import React from "react";
import DeptInventory from "../dept-inventory/dept-inventory";
import produceInvUpdate from "../../../../redux-101-store/src/lib/action-creators/produceInvUpdate";
import {bindActionCreators} from "redux";

/* eslint-disable-next-line */

class ProduceDept extends React.Component<ProduceDeptProps, ProduceDeptState> {

  override render() {

    return (
      <div className={styles['container']}>
        <Typography variant={'h6'}>Welcome to ProduceDept!</Typography>

          <DeptInventory
            data={this.props.data}
            operation={'+'}
            updateInv={this.props.produceInvUpdate}/>
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => {
  return {
    data: state.produce
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    produceInvUpdate: produceInvUpdate
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);
