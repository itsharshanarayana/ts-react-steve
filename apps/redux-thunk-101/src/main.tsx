import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import App from './app/app';
import {reducers} from "@itsharshanarayana/redux-thunk-store";
import {composeWithDevTools} from "redux-devtools-extension";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(reducers, undefined, composedEnhancers);


/*const store = createStore(
  reducers,
  applyMiddleware(thunk),
  //@ts-ignore
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/


root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
