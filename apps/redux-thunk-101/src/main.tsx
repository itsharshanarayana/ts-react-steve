import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";

import App from './app/app';
import {createStore} from "redux";
import {reducers} from "@itsharshanarayana/redux-thunk-store";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(reducers);

root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
