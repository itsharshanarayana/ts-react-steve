import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import styles from './mui-table.module.css';
import React from "react";
import {ActionType, Food} from "@itsharshanarayana/redux-101-types";

/* eslint-disable-next-line */

const foodData = (
  name: string,
  quantity: number,
) => {
  return {
    name, quantity
  }
}

export interface MuiTableProps {
  data: Food[];
  updateInv: (operation: string, index: number) => ActionType
}

const MuiTable: React.FC<MuiTableProps> = ({data, updateInv}) => {
  const update = (operation: string, i: number) => {
    updateInv(operation, i);
  };

  return (
    <div className={styles['container']}>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell align="right"><b>Quantity</b></TableCell>
              <TableCell align="right"><b>Increment</b></TableCell>
              <TableCell align="right"><b>Decrement</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  <b>{row.food}</b>
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success" onClick={() => update('+', i)}>
                    +
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="error" onClick={() => update('-', i)}>
                    -
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MuiTable;
