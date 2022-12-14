import {ProduceAction} from "../../../../redux-101-types/src/lib/actions/ProduceAction";
import {ActionTypesEnum} from "@itsharshanarayana/redux-101-types";


const produceInvUpdate = (operation: string, index: number): ProduceAction => {
  return {
    type: ActionTypesEnum.UPDATE_PRODUCE_INV,
    payload: {
      operation,
      index
    }
  }
}

export default produceInvUpdate;
