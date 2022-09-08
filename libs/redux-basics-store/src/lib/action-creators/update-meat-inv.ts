import {FoodAction} from "@itsharshanarayana/redux-basics-store";
import {FoodActionTypes} from "../types/food-action-types";
import {updateInv} from "./update-inv";

export const updateMeatInv = (operation: string, index: number): FoodAction => {
  return updateInv(operation, index, FoodActionTypes.UPDATE_MEAT_INV);
};

