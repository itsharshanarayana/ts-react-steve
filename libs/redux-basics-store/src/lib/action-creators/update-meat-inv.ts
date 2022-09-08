import {FoodAction} from "@itsharshanarayana/redux-basics-store";
import {FoodActionTypes} from "../types/food-action-types";

export const updateMeatInv = (operation: string, index: number): FoodAction => {
  console.log('updateMeatInv: running ...');
  return {
    type: FoodActionTypes.UPDATE_MEAT_INV,
    payload: {
      operation,
      index
    }
  }
};

export default updateMeatInv;
