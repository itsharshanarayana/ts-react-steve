import styles from './mui-dropdown.module.css';
import React, {useState} from "react";
import {Typography} from "@mui/material";
import MuiSelect from "../mui-select/mui-select";
import {Color} from "@itsharshanarayana/widgets-types";

/* eslint-disable-next-line */
export interface MuiDropdownProps {}

const options: Color[] = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' },
];

const MuiDropdown: React.FC<MuiDropdownProps> = (props) => {
  const [selected, setSelected] = useState<Color>(options[0]);

  const onSelectedChange = (sel: Color) => {
    console.log('MuiDropdown:selected:', sel);
    setSelected(sel);
  };

  return (
    <div className={styles['container']}>
      <Typography variant={'h4'} sx={{marginBottom: '20px'}}>
        Welcome to MuiDropdown!
      </Typography>
      <MuiSelect
        label={'Select a Color'}
        options={options}
        selected={selected}
        onSelectedChange={onSelectedChange}
      />
    </div>
  );
}

export default MuiDropdown;
