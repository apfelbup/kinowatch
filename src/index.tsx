import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <PersistGate loading={'loader'} persistor={persistor}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PersistGate>
  </Provider>
  </BrowserRouter>
);