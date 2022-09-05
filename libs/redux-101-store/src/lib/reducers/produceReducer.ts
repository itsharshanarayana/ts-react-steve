import {ActionTypesEnum, Food} from "@itsharshanarayana/redux-101-types";
import {ProduceAction} from "../../../../redux-101-types/src/lib/actions/ProduceAction";

const seedData: Food[] = [
  { food: 'lettuce', quantity: 13 },
  { food: 'turnips', quantity: 18 },
  { food: 'apples', quantity: 35 },
  { food: 'cilantro', quantity: 135 },
];

export const produceReducer = (state: Food[] = seedData, action: ProduceAction): Food[] => {
  if (action.type === ActionTypesEnum.UPDATE_PRODUCE_INV) {
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

export default produceReducer;
