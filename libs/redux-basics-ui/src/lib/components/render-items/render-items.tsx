import styles from './render-items.module.css';
import {Food, FoodAction} from "@itsharshanarayana/redux-basics-store";
import React from "react";

/* eslint-disable-next-line */
export interface RenderItemsProps {
  data: Food[];
  update: (operation: string, index: number) => FoodAction;
}

export const RenderItems: React.FC<RenderItemsProps> = ({data, update}) => {
  const onButtonClick = (operation: string, index: number) => {
    update(operation, index);
  };

  const renderItems = data.map((r, i) => {
    return (
      <div key={i}>
        <li>{r.food}: {r.quantity}</li>
        <button value={'+'} onClick={() => onButtonClick('+', i)}>+</button>
        <button value={'-'} onClick={() => onButtonClick('-', i)}>-</button>
      </div>
    );
  });

  return (
    <div className={styles['container']}>
      {renderItems}
    </div>
  );
}

export default RenderItems;
