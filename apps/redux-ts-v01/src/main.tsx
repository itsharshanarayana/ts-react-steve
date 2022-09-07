import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import {Provider} from 'react-redux';

import App from './app/app';
import {theReduxStore} from "@itsharshanarayana/redux-ts-v01-store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={theReduxStore}>
    <App />
    </Provider>
  </StrictMode>
);
