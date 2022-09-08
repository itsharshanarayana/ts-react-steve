import styles from './frozen-dept.module.css';
import React from "react";
import {Typography} from "@mui/material";

import {connect} from 'react-redux';
import {FrozenDeptProps, FrozenDeptState, StoreState} from "@itsharshanarayana/redux-101-types";
import DeptInventory from "../dept-inventory/dept-inventory";
import frozenInvUpdate from "../../../../redux-101-store/src/lib/action-creators/frozenInvUpdate";
import {bindActionCreators} from "redux";
import MuiTable from "../mui-table/mui-table";

/* eslint-disable-next-line */
class FrozenDept extends React.Component<FrozenDeptProps, FrozenDeptState> {

  override render() {
    return (
      <div className={styles['container']}>
        <Typography variant={'h5'}
                    sx={{ marginBottom: '15px', color: 'blue' }}>
          <b>Welcome to Frozen Department!</b>
        </Typography>

        {/*<DeptInventory
          data={this.props.data}
          operation={'+'}
          updateInv={this.props.frozenInvUpdate}
        />*/}
        <MuiTable
          data={this.props.data}
          updateInv={this.props.frozenInvUpdate}/>
      </div>
    );
  }
}

/* connect returns a function.
* To the function returned by connect,
* component (FrozenDept) is passed as an argument,
* that would be the component that needs to be rendered.
* */
/* Connect function takes 2 arguments, which are functions.
* The first one is a function that maps a piece of redux state to
* the component's state - mapStateToProps.
* mapStateToProps takes entire store. */

// @ts-ignore
const mapStateToProps = (state): any => {
  /* Returns an object.
  * key: the name of the property in this component.
  * value: piece of state in the store. */
  return {
    data: state.frozen
  };
}

// To tie component to dispatch.
// Takes one argument - dispatch, returns bindActionCreators.
const mapDispatchToProps = (dispatch: any) => {
  // Each property is a local property.
  // Each value is a function that is dispatched when run.
  return bindActionCreators({
    frozenInvUpdate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
