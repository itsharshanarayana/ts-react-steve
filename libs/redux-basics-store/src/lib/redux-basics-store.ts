import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducers} from './reducers/reducers';

export function reduxBasicsStore(): string {
  return 'redux-basics-store';
}

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

// @ts-ignore
export const theReduxStore: any = createStore(reducers, {}, composedEnhancers);

export default theReduxStore;
