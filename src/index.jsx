import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import reducer from './reducers';

import Home from './containers';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  repos: reducer
});

const middlewares = applyMiddleware(reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
