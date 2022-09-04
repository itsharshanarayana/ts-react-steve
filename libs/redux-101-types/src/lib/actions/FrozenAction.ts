import {ActionTypesEnum, Payload} from "@itsharshanarayana/redux-101-types";
import {Action} from "./Action";


export interface FrozenAction extends Action {
  type: ActionTypesEnum.UPDATE_FROZEN_INV;
  payload: Payload;
}
