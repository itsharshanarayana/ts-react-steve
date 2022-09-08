import {Food, FoodAction} from "@itsharshanarayana/redux-basics-store";

export const baseReducer = (state: Food[], action: FoodAction): Food[] => {
    const newState = [...state];
    switch(action.payload?.operation) {
      case '+':
        newState[action.payload?.index].quantity++;
        break;
      case '-':
        newState[action.payload?.index].quantity--;
        break;
      default:
        console.log('default operation');
        return state;
    }
    return newState;
};
