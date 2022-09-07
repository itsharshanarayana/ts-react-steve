import styles from './result-table.module.css';
import React from "react";
import {
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import {Repository} from '@itsharshanarayana/redux-ts-v01-store';

/* eslint-disable-next-line */
export interface ResultTableProps {
  results: Repository[]
}

export const ResultTable: React.FC<ResultTableProps> = ({results}) => {
  const renderButtons = (row: Repository) => {
    return (
      <div key={row.name}>
        <Button href={row.links.npm}>NPM</Button>
        <Button href={row.links.home}>Home</Button>
        <Button href={row.links.repository}>Git</Button>
        <Button href={row.links.bugs}>Bugs</Button>
      </div>
    );
  }
  const renderTable = results.map(
    (row, i) => {

      return (
        <TableRow key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.version}</TableCell>
          <TableCell>{row.description}</TableCell>
          <TableCell>{row.publisher.username}</TableCell>
          <TableCell>{row.publisher.email}</TableCell>
          <TableCell>
            <ButtonGroup variant="text" size={'small'} aria-label="small button group">
              {renderButtons(row)}
            </ButtonGroup></TableCell>
        </TableRow>
      );
    }
  );
  return (
    <div className={styles['container']}>
      <TableContainer component={Paper} sx={{border: '1px solid lightgray'}}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>Package Name</b></TableCell>
            <TableCell><b>Version</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Publisher Name</b></TableCell>
            <TableCell><b>Publisher Email</b></TableCell>
            <TableCell><b>Links</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTable}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ResultTable;
