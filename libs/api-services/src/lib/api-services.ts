import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {createWikipediaClient} from "./wikipedia";

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


export const getClient = (clientType: string): AxiosInstance => {
  switch (clientType) {
    case 'wikipedia':
      return createWikipediaClient();
    default:
      console.log('Invalid client type specified');
      throw Error('Invalid client type specified');
  }
};
