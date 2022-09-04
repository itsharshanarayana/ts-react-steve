import styles from './meat-dept.module.css';
import {Typography} from "@mui/material";
import {Food, MeatDeptProps, MeatDeptState, StoreState} from "@itsharshanarayana/redux-101-types";
import React from "react";
import {connect} from "react-redux";
import DeptInventory from "../dept-inventory/dept-inventory";
import meatInvUpdate from "../../../../redux-101-store/src/lib/action-creators/meatInvUpdate";
import {bindActionCreators} from "redux";

/* eslint-disable-next-line */


class MeatDept extends React.Component<MeatDeptProps, MeatDeptState> {

  override render() {

    return (
      <div className={styles['container']}>
        <Typography variant={'h6'}>Welcome to MeatDept!</Typography>

        <DeptInventory
          data={this.props.data}
          operation={'+'}
          updateInv={this.props.meatInvUpdate}/>
      </div>
    );
  }
}


const mapStateToProps = (state: any): any => {
  return {
    data: state.meat
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    meatInvUpdate: meatInvUpdate
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);
