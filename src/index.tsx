import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './App';
import reducer from './state/reducers';
import { PopsState } from './state/types';
import './index.css';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const rootReducers = combineReducers({ popCollection: reducer });

export const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger),
);

export interface AppState {
  popCollection: PopsState,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
