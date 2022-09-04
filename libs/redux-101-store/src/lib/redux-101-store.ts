import {combineReducers} from "redux";
import frozenReducer from "./reducers/frozenReducer";
import produceReducer from "./reducers/produceReducer";
import meatReducer from "./reducers/meatReducer";

export function redux101Store(): string {
  return 'redux-101-store';
}

const reducers = combineReducers({
  /* Each key here is a piece of state in the redux store.
  * Eah value will be a value of piece of state in the redux store.
  * Value represents a reducer which is used to
  * update piece of state in the redux store. */
  frozen: frozenReducer,
  produce: produceReducer,
  meat: meatReducer,
});


export default reducers;
