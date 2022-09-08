import {FoodAction} from "../actions/food-actions";
import {FoodActionTypes} from "../types/food-action-types";

export const updateFrozenInv = (operation: string, index: number): FoodAction => {
  console.log('updateFrozenInv: running ...');
  return {
    type: FoodActionTypes.UPDATE_FROZEN_INV,
    payload: {
      operation,
      index
    }
  }
};

export default updateFrozenInv;
