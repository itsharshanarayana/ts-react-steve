import {Dispatch} from "redux";
import {Action} from "../actions/repositories-actions";
import {RepositoryActionTypes} from "../action-types/repository-action-types";
import {Repository} from "@itsharshanarayana/ts-redux-store";
import {npmjsRepo} from "../api-service/api-service";

const endPoint = '-/v1/search';

export const fetchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: RepositoryActionTypes.SEARCH_REPOSITORIES
    });

    try {
      const {data} = await npmjsRepo.get(endPoint, {
        params: {
          text: term
        }
      });

      const repositories: Repository[] = data.objects.map((result: any) => {
        return {
          name: result.package.name,
          version: result.package.version,
          description: result.package.description,
          links: {
            npm: result.package.links.npm,
            homepage: result.package.links.homepage,
            repository: result.package.links.repository,
            bugs: result.package.links.bugs
          },
          publisher: {
            username: result.package.publisher.username,
            email: result.package.publisher.email
          }
        }
      });

      console.log('Repositories:', repositories);
      dispatch({
        type: RepositoryActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        // @ts-ignore
        payload: [...repositories]
      })

    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: RepositoryActionTypes.SEARCH_REPOSITORIES_ERROR,
          payload: err.message
        });
      }
    }
  }

};

export default fetchRepositories;
