import {Food} from "@itsharshanarayana/redux-basics-store";

export interface FoodState {
  meat: Food[],
  produce: Food[];
  frozen: Food[];
}

export default FoodState;
