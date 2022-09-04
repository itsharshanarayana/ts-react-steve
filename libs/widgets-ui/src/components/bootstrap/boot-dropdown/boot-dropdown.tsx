import styles from './boot-dropdown.module.css';
import BootSelect from "../boot-select/boot-select";
import {Color} from "@itsharshanarayana/widgets-types";
import {useState} from "react";

/* eslint-disable-next-line */
export interface BootDropdownProps {}

const options: Color[] = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' },
];

export function BootDropdown(props: BootDropdownProps) {
  const [selected, setSelected] = useState<Color>(options[0]);

  const onSelectedChange = (sel: Color) => {
    setSelected(sel);
  }
  return (
    <div className={styles['container']}>
      <h1>Welcome to Bootstrap Dropdown!</h1>
      {/*<div className="btn-group">
        <button type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false">
          Action
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>*/}
      <BootSelect  label={"Select a Color"}
                   options={options}
                   selected={selected}
                   onSelectedChange={onSelectedChange}/>
    </div>
  );
}

export default BootDropdown;
