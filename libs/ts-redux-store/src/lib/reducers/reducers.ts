import {combineReducers} from "redux";
import repositoriesReducer from "./repositoriesReducer";
import repositoriesDataReducer from "./repositories-data-reducer";


// @ts-ignore
// @ts-ignore
export const reducers = combineReducers({
  repositories: repositoriesReducer,
  repositoriesData: repositoriesDataReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
