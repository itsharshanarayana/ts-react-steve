import {Repository} from '../action-types/data-types';

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: Repository[];
}
