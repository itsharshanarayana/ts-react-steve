import axios from "axios";
import {Dispatch} from "redux";
import {Action} from "../actions/repositories-actions";
import {RepositoryActionTypes} from "../action-types/repository-action-types";
import {Repository} from "@itsharshanarayana/ts-redux-store";

const baseUrl = 'https://registry.npmjs.org';
const endPoint = '-/v1/search';

export const npmjsRepo = axios.create({
  baseURL: `${baseUrl}`,
  params: {}
});

