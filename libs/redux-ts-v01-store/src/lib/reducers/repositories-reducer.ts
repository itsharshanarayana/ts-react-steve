import {Action} from '../actions/repositories-actions'
import {RepositoriesState} from '../state/repositories-state';
import {RepositoryActionTypes} from '../action-types/repository-action-types';

const INITIAL_STATE = { loading: false, error: null, data: [] };
export const repositoriesReducer = (state: RepositoriesState = INITIAL_STATE, action: Action): RepositoriesState => {

  switch(action.type) {
    case RepositoryActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case RepositoryActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case RepositoryActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
