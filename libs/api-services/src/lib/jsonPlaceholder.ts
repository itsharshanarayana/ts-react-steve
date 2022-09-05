import {AxiosInstance} from "axios";
import {getApiClient} from "@itsharshanarayana/api-services";
import {
  JSONPLACEHOLDER_BASE_URL,
  jsonPlaceholderParams,
} from "@itsharshanarayana/widgets-types";


export const createJsonPlaceholderClient = (): AxiosInstance => {
  return getApiClient(JSONPLACEHOLDER_BASE_URL, jsonPlaceholderParams);
};
