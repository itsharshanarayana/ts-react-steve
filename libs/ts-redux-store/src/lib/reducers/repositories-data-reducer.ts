import {RepositoriesAction, RepositoriesState, RepositoriesState1} from "@itsharshanarayana/ts-redux-store";
import RepositoriesActionTypes from "../types/action-types";


const INITIALIZED = {loading: false, error: null, data: []};
export const repositoriesDataReducer = (state: RepositoriesState1 = INITIALIZED, action: RepositoriesAction): RepositoriesState1 => {

  switch (action.type) {
    case RepositoriesActionTypes.SEARCH_REPOSITORIES:
      return {loading: true, error: null, data: []};
    case RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS1:
      return {loading: false, error: null, data: action.payload};
    case RepositoriesActionTypes.SEARCH_REPOSITORIES_ERROR:
      return {loading: false, error: action.payload, data: []};
    default:
      return state;
  }
}

export default repositoriesDataReducer;
