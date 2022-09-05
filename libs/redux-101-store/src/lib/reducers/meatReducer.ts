import {ActionTypesEnum, Food} from "@itsharshanarayana/redux-101-types";
import {MeatAction} from "../../../../redux-101-types/src/lib/actions/MeatAction";

const seedData: Food[] = [
  { food: 'chicken breast', quantity: 14 },
  { food: 'bacon', quantity: 19 },
  { food: 'mahi mahi', quantity: 38 },
  { food: 'salmon', quantity: 135 },
];

export const meatReducer = (state: Food[] = seedData, action: MeatAction): Food[] => {
  if (action.type === ActionTypesEnum.UPDATE_MEAT_INV) {
    const newState: Food[] = [...state];
    switch(action.payload?.operation) {
      case '+':
        newState[action.payload?.index].quantity++;
        break;
      case '-':
        newState[action.payload?.index].quantity--;
        break;
      default:
        throw new Error('Invalid operation')
    }
    return newState;
  }
  return state;
};

export default meatReducer;
