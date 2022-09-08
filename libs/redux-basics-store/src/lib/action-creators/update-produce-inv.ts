import {FoodAction} from "../actions/food-actions";
import {FoodActionTypes} from "../types/food-action-types";
import {updateInv} from "./update-inv";

export const updateProduceInv = (operation: string, index: number): FoodAction => {
  return updateInv(operation, index, FoodActionTypes.UPDATE_PRODUCE_INV);
};
