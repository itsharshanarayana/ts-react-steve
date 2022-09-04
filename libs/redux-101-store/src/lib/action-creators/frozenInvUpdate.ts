import {FrozenAction} from "../../../../redux-101-types/src/lib/actions/FrozenAction";
import {ActionTypesEnum} from "@itsharshanarayana/redux-101-types";


const frozenInvUpdate = (operation: string, index: number): FrozenAction => {
  return {
    type: ActionTypesEnum.UPDATE_FROZEN_INV,
    payload: {
      operation,
      index
    }
  }
};

export default frozenInvUpdate;
