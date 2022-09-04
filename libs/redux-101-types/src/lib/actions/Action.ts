import {Payload} from "@itsharshanarayana/redux-101-types";


export interface Action {
  type: string;
  payload?: Payload;
}
