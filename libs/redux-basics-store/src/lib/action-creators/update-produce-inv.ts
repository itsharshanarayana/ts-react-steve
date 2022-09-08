import {FoodAction} from "../actions/food-actions";
import {FoodActionTypes} from "../types/food-action-types";

export const updateProduceInv = (operation: string, index: number): FoodAction => {
  console.log('updateMeatInv: running ...');
  return {
    type: FoodActionTypes.UPDATE_PRODUCE_INV,
    payload: {
      operation,
      index
    }
  }
};

export default updateProduceInv;
