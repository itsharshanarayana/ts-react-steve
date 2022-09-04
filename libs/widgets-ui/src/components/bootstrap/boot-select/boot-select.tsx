import styles from './boot-select.module.css';
import {Color} from "@itsharshanarayana/widgets-types";
import React from "react";

/* eslint-disable-next-line */
export interface BootSelectProps {
  label: string;
  options: Color[];
  selected: Color;
  onSelectedChange: (sel: Color) => void;
}

const BootSelect: React.FC<BootSelectProps> = ({label, options, selected, onSelectedChange}) => {

  const onListClick = (event:  React.MouseEvent<HTMLLIElement>) => {
    console.log('Event:', event.target);
  };

  const renderedOptions = options.map( (o, i) => {
    return (
      <li key={i} onClick={onListClick} value={o.label}>
        <a className="dropdown-item" href="#">{o.label}</a>
      </li>
    );
  });

  return (
    <div className={styles['container']}>
      <div className="btn-group">
        <button type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="true">
          Action
        </button>
        <ul className="dropdown-menu">
          {renderedOptions}
        </ul>
      </div>
    </div>
  );
}

export default BootSelect;
