import {RepositoryActionTypes} from '../action-types/repository-action-types';
import {Repository} from "../action-types/data-types";

export interface SearchRepositoriesAction {
  type: RepositoryActionTypes.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: RepositoryActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: Repository[];
}

export interface SearchRepositoriesErrorAction {
  type: RepositoryActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
