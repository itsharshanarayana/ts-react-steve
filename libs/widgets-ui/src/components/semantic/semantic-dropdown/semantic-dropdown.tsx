import styles from './semantic-dropdown.module.css';
import {Dropdown, Menu} from "semantic-ui-react";
import {Color} from "@itsharshanarayana/widgets-types";
import React from "react";

/* eslint-disable-next-line */
export interface SemanticDropdownProps {
  options: Color[];
}

export const SemanticDropdown: React.FC<SemanticDropdownProps> = ({options}) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SemanticDropdown!</h1>
      <Menu compact>
        <Dropdown text='Dropdown' options={options} simple item />
      </Menu>
    </div>
  );
}

export default SemanticDropdown;
