import {FoodAction} from "../actions/food-actions";
import {Food} from "../types/models";
import {FoodActionTypes} from "../types/food-action-types";
import {baseReducer} from "./base-reducer";


const SEED_DATA: Food[] = [
  {food: 'lettuce', quantity: 10},
  {food: 'Tomatoes', quantity: 50},
  {food: 'Cilantro', quantity: 80},
  {food: 'Tamarind', quantity: 78},
];

export const produceReducer = (state: Food[] = SEED_DATA, action: FoodAction): Food[] => {
  if (action.type === FoodActionTypes.UPDATE_PRODUCE_INV)
    return baseReducer(state, action);
  return state;
};

export default produceReducer;
