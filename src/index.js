import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';

// ルーターの設定
import createBrowserHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';

import logger from 'redux-logger';

// historyインスタンスを作成する処理追加
const history = createBrowserHistory();

// Storeを作成する
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  // applyMiddleware関数でredux-loggerを設定
  applyMiddleware(
    routerMiddleware(history),
    logger
  )
);

ReactDOM.render(
  <Provider store={store}>
    {/*ConnectedRouterコンポーネントを追加*/}
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
