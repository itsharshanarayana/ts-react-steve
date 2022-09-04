import styles from './mui-select.module.css';
import React from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Color} from "@itsharshanarayana/widgets-types";

/* eslint-disable-next-line */
export interface MuiSelectProps {
  label: string;
  options: Color[];
  selected: Color;
  onSelectedChange: (sel: Color) => void;
}

const MuiSelect: React.FC<MuiSelectProps> = ({
   label, options,
   selected, onSelectedChange
}) => {

  const renderedItems = options.map((o, i) => {
    return (
      <MenuItem
        key={i}
        value={o.value}
        onClick={(e) => onSelectedChange(o)}>
        {o.label}
      </MenuItem>
    );
  });

  return (
    <div className={styles['container']}>
      <FormControl sx={{m: 1, minWidth: 200}} size="small">
        <InputLabel id="demo-select-small">{label}</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label={selected.label}
          value={selected.value}
          sx={{color: `${selected.value}`}}>
          {renderedItems}
        </Select>
      </FormControl>
    </div>
  );
}

export default MuiSelect;
