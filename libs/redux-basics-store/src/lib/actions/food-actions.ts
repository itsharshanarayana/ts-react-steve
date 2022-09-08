import {FoodActionTypes} from "../types/food-action-types";
import {Payload} from "../types/models";

export interface Action {
  payload: Payload;
}

export interface UpdateFrozenAction extends Action {
  type: FoodActionTypes.UPDATE_FROZEN_INV;
}

export interface UpdateProduceAction extends Action {
  type: FoodActionTypes.UPDATE_PRODUCE_INV;
}

export interface UpdateMeatAction extends Action {
  type: FoodActionTypes.UPDATE_MEAT_INV;
}

export type FoodAction = UpdateFrozenAction | UpdateProduceAction | UpdateMeatAction ;
