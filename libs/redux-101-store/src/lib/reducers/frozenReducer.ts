import {ActionTypesEnum, Food} from "@itsharshanarayana/redux-101-types";
import {FrozenAction} from "../../../../redux-101-types/src/lib/actions/FrozenAction";

const seedData: Food[] = [
  { food: 'TV dinners', quantity: 10 },
  { food: 'Frozen Veggies', quantity: 12 },
  { food: 'Frozen Pizzas', quantity: 15 },
];


export const frozenReducer = (state: Food[] = seedData, action: FrozenAction): Food[] => {
  if (action.type === ActionTypesEnum.UPDATE_FROZEN_INV) {
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

export default frozenReducer;
