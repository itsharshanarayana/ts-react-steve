import {MeatAction} from "../../../../redux-101-types/src/lib/actions/MeatAction";
import {ActionTypesEnum} from "@itsharshanarayana/redux-101-types";


const meatInvUpdate = (operation: string, index: number): MeatAction => {
  console.log('meatInvUpdate: operation:', operation, ', index:', index);
  return {
    type: ActionTypesEnum.UPDATE_MEAT_INV,
    payload: {
      operation,
      index
    }
  }
};

export default meatInvUpdate;
