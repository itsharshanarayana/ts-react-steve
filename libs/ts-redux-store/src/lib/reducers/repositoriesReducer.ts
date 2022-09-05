import RepositoriesActionTypes from "../types/action-types";
import {
  RepositoriesAction,
} from "../types/actions";
import {RepositoriesState} from "../types/state";

const INITIALIZED = { loading: false, error: null, data: [] };
export const repositoriesReducer = (state: RepositoriesState = INITIALIZED, action: RepositoriesAction): RepositoriesState => {

  console.log('action type:', action.type);
  switch(action.type) {
    case RepositoriesActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case RepositoriesActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}

export default repositoriesReducer;
