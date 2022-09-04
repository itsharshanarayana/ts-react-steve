import styles from './dept-inventory.module.css';
import {ActionType, DeptInventoryProps, Food, StoreState} from "@itsharshanarayana/redux-101-types";
import React from "react";

/* eslint-disable-next-line */

const DeptInventory: React.FC<DeptInventoryProps> = ({data, operation, updateInv}) => {
  const update = (operation: string, i: number) => {
    updateInv(operation, i);
  };

  const inventoryData = data.map((item, i) => {
    return (
      <div key={i}>
        <li>{item.food}: {item.quantity}</li>
        <div>
          <button
            onClick={() => update('+', i)}
            value='+'>
            +
          </button>
          <button
            onClick={() => update('-', i)}
            value='- '>
            -
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <ul>
        {inventoryData}
      </ul>
    </>
  );
}

export default DeptInventory;
