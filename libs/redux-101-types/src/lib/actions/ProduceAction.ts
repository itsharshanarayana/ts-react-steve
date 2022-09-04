import {ActionTypesEnum, Payload} from "@itsharshanarayana/redux-101-types";
import {Action} from "./Action";


export interface ProduceAction extends Action {
  type: ActionTypesEnum.UPDATE_PRODUCE_INV;
  payload: Payload;
}
