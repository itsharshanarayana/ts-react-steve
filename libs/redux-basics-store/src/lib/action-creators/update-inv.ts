import {FoodAction} from "@itsharshanarayana/redux-basics-store";
import {FoodActionTypes} from "../types/food-action-types";


export const updateInv = (operation: string, index: number, type: FoodActionTypes): FoodAction => {
  return {
    type,
    payload: {
      operation,
      index
    }
  }
}
