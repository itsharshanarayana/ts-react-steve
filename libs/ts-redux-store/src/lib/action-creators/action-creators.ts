import axios from 'axios';
import ActionTypes from "../types/action-types";
import {RepositoriesAction} from "../types/actions";
import {Dispatch} from "redux";
import {Repository} from "../types/state";


export const searchRepositories = (term: string): any => {
  return async (dispatch: Dispatch<RepositoriesAction>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });

      /*
      *  name: string;
        version: string;
        description: string;
        links: Links;
        publisher: Publisher;
        *
        * "links": {
          "npm": "https://www.npmjs.com/package/react",
          "homepage": "https://reactjs.org/",
          "repository": "https://github.com/facebook/react",
          "bugs": "https://github.com/facebook/react/issues"
        },
        "publisher": {
          "username": "gnoff",
          "email": "jcs.gnoff@gmail.com"
        },
  * */

      console.log("Search data:", data);
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

      const names: string[] = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS1,
        payload: repositories
      });

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });

    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
          payload: err.message
        });
      }
    }
  }
};

export default searchRepositories;
