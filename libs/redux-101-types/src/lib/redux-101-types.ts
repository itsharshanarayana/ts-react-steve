import {FrozenAction} from "./actions/FrozenAction";
import {ProduceAction} from "./actions/ProduceAction";
import {MeatAction} from "./actions/MeatAction";

export function redux101Types(): string {
  return 'redux-101-types';
}

export interface Food {
  food: string;
  quantity: number;
}


export interface FrozenDeptProps {
  data: Food[];
  frozenInvUpdate: (operation: string, index: number) => FrozenAction;
}
export interface FrozenDeptState {}

export interface MeatDeptProps {
  data: Food[];
  meatInvUpdate: (operation: string, index: number) => MeatAction;
}
export interface MeatDeptState {}


export interface ProduceDeptProps {
  data: Food[];
  produceInvUpdate: (operation: string, index: number) => ProduceAction;
}
export interface ProduceDeptState {}


export type StoreState = FrozenDeptProps | ProduceDeptProps | MeatDeptProps;

export type ActionType = FrozenAction | ProduceAction | MeatAction;

export interface Payload {
  operation: string;
  index: number;
}

export enum ActionTypesEnum {
  UPDATE_FROZEN_INV = 'UPDATE_FROZEN_INV',
  UPDATE_PRODUCE_INV = 'UPDATE_PRODUCE_INV',
  UPDATE_MEAT_INV = 'UPDATE_MEAT_INV'
}

export interface DeptInventoryProps {
  data: Food[];
  operation: string;
  updateInv: (operation: string, index: number) => ActionType
}
