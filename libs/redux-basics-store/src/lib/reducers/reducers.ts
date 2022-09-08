import {combineReducers} from "redux";
import frozenReducer from "./frozen-reducer";
import produceReducer from "./produce-reducer";
import meatReducer from "./meat-reducer";


export const reducers = combineReducers({
  frozen: frozenReducer,
  produce: produceReducer,
  meat: meatReducer,
});

