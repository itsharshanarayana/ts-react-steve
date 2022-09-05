import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from './reducers/reducers';

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const theStore: any = createStore(reducers, {}, composedEnhancers);

export default theStore;
