import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { match, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const initialState = window.__INITIAL_STATE__ || {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, initialState, composeEnhancers(
    applyMiddleware(
      routerMiddleware,
      thunkMiddleware
    )
  )
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
