import RepositoriesActionTypes from "./action-types";
import {Repository} from "./state";

export interface SearchRepositoriesAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesSuccessAction1 {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS1;
  payload: Repository[];
}


export interface SearchRepositoriesErrorAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// Union types
export type RepositoriesAction =
  SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
  | SearchRepositoriesSuccessAction1;
