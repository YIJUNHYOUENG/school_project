import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as ServiceWorker from './serviceWorker'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";
import promiseMiddleware from 'redux-promise';

const createStoreWidthMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk) (createStore)

ReactDOM.render(
  <Provider
    store={createStoreWidthMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ServiceWorker.unregister();
