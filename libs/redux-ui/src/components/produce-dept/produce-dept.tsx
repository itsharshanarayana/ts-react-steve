import styles from './produce-dept.module.css';
import {Typography} from "@mui/material";
import {Food, ProduceDeptProps, ProduceDeptState, StoreState} from "@itsharshanarayana/redux-101-types";
import {connect} from "react-redux";
import React from "react";
import DeptInventory from "../dept-inventory/dept-inventory";
import produceInvUpdate from "../../../../redux-101-store/src/lib/action-creators/produceInvUpdate";
import {bindActionCreators} from "redux";
import MuiTable from "../mui-table/mui-table";

/* eslint-disable-next-line */

class ProduceDept extends React.Component<ProduceDeptProps, ProduceDeptState> {

  override render() {

    return (
      <div className={styles['container']}>
        <Typography variant={'h5'} sx={{marginBottom: '15px', color: 'green'}}><b>Welcome to Produce
          Department!</b></Typography>

        {/*<DeptInventory
            data={this.props.data}
            operation={'+'}
            updateInv={this.props.produceInvUpdate}/>*/}
        <MuiTable
          data={this.props.data}
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
