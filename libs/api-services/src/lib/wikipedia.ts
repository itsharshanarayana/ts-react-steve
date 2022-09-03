import {getApiClient} from "@itsharshanarayana/api-services";
import {wikiParams, WIKIPEDIA_BASE_URL, WikiSearch} from "@itsharshanarayana/widgets-types";
import {AxiosInstance} from "axios";


export const createWikipediaClient = (): AxiosInstance => {
  return getApiClient(WIKIPEDIA_BASE_URL, wikiParams);
};

export const getWikiResults = async (term: string): Promise<WikiSearch[]> => {
  try {
    const { data } = await createWikipediaClient().get('/w/api.php', {
        params: {
          srsearch: term
        }
      }
    );
    return data.query.search;
  } catch(err) {
    if (err instanceof Error) {
      console.log('Exception caught with wikipedia api call!');
      throw err;
    }
  }
  return [];
};
