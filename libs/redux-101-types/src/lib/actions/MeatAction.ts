import {ActionTypesEnum, Payload} from "@itsharshanarayana/redux-101-types";
import {Action} from "./Action";


export interface MeatAction extends Action {
  type: ActionTypesEnum.UPDATE_MEAT_INV;
  payload: Payload;
}
