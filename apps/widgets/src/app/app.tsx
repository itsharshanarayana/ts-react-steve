// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from "react";
import {BootDropdown, MuiSearch, SemanticDropdown} from "@itsharshanarayana/widgets-ui";
import MuiDropdown from "../../../../libs/widgets-ui/src/components/mui-dropdown/mui-dropdown";
import {Color} from "@itsharshanarayana/widgets-types";

const options: Color[] = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' },
];

export const App: React.FC = () => {
  return (
    <>
      {/*<MuiSearch />*/}
      <MuiDropdown />
      {/*<BootDropdown />*/}
      {/*<SemanticDropdown options={options}/>*/}
    </>
  );
}

export default App;
