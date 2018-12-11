import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux";
import reducers from "./store/reducers";
import {applyMiddleware, compose,createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {watchSaga} from './store/saga';

const
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
  sagaMiddleware = createSagaMiddleware(),
  store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
