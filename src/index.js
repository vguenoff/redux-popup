import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middleware
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { load, save } from 'redux-localstorage-simple';
import createHistory from 'history/createHashHistory';

// default styles
import 'css-reset-and-normalize/css/reset-and-normalize.css';
import './index.css';

// main component
import App from './components/App';

// reducers
import video from './reducers/video';

// store config
const history = createHistory();

const reducers = combineReducers({
  video,
  router: routerReducer,
});

const routerMiddlewareWithHistory = routerMiddleware(history);

const store = createStore(
  reducers,
  load(),
  composeWithDevTools(
    applyMiddleware(
      routerMiddlewareWithHistory,
      thunk,
      logger,
      save(),
    )),
);

// render
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
