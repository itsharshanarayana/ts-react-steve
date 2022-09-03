import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {createWikipediaClient} from "./wikipedia";
import {ApiClientTypes} from "@itsharshanarayana/widgets-types";

export function apiServices(): string {
  return 'api-services';
}


export const getApiHeaders = () => {
  return {};
};


export const getApiClient = (baseUrl: string, config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    baseURL: baseUrl,
    params: config?.params,
    headers: getApiHeaders()
  });
};


export const getClient = (clientType: ApiClientTypes): AxiosInstance => {
  switch (clientType) {
    // case 'wikipedia':
    case ApiClientTypes.WIKIPEDIA_CLIENT:
      return createWikipediaClient();
    default:
      console.log('Invalid client type specified');
      throw Error('Invalid client type specified');
  }
};
