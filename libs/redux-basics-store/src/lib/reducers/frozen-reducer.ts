import {Food} from "../types/models";
import {FoodAction} from "../actions/food-actions";
import {FoodActionTypes} from "../types/food-action-types";
import {baseReducer} from "./base-reducer";

const SEED_DATA: Food[] = [
  {food: 'TV dinners', quantity: 10},
  {food: 'Pizzas', quantity: 2},
  {food: 'Frozen ice creams', quantity: 100},
];

export const frozenReducer = (state: Food[] = SEED_DATA, action: FoodAction): Food[] => {
  if(action.type === FoodActionTypes.UPDATE_FROZEN_INV)
    return baseReducer(state, action);

  return state;
};

export default frozenReducer;
