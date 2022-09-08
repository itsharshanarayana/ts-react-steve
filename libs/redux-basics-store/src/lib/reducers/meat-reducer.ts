import {Food} from "../types/models";
import {FoodAction} from "../actions/food-actions";
import {FoodActionTypes} from "../types/food-action-types";
import {baseReducer} from "./base-reducer";

const SEED_DATA: Food[] = [
  {food: 'Chicken', quantity: 10},
  {food: 'bacon', quantity: 50},
  {food: 'Red meat', quantity: 80},
];

export const meatReducer = (state: Food[] = SEED_DATA, action: FoodAction): Food[] => {
  if (action.type === FoodActionTypes.UPDATE_MEAT_INV)
    return baseReducer(state, action);

  return state;
};

export default meatReducer;
