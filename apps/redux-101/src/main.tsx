import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux';
import {compose, createStore} from "redux";

import App from './app/app';
import reducers from "../../../libs/redux-101-store/src/lib/redux-101-store";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Connecting redux dev tools.
// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create redux store so that Provider has a store to work with.
// @ts-ignore
const store = createStore(
  reducers,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
