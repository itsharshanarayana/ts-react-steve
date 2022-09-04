import {FrozenAction} from "../../../../redux-101-types/src/lib/actions/FrozenAction";
import {ActionTypesEnum} from "@itsharshanarayana/redux-101-types";


const frozenInvUpdate = (operation: string, index: number): FrozenAction => {
  console.log('frozenInvUpdate: Operation:', operation, ', index:', index);
  return {
    type: ActionTypesEnum.UPDATE_FROZEN_INV,
    payload: {
      operation,
      index
    }
  }
};

export default frozenInvUpdate;
