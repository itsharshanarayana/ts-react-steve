import {FoodActionTypes} from "../types/food-action-types";
import {Payload} from "../types/models";

export interface UpdateFrozenAction {
  type: FoodActionTypes.UPDATE_FROZEN_INV;
  payload: Payload;
}

export interface UpdateProduceAction {
  type: FoodActionTypes.UPDATE_PRODUCE_INV;
  payload: Payload;
}

export interface UpdateMeatAction {
  type: FoodActionTypes.UPDATE_MEAT_INV;
  payload: Payload;
}

export type FoodAction = UpdateFrozenAction | UpdateProduceAction | UpdateMeatAction ;
