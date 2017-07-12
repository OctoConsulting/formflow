import React from 'react';
import {Route, IndexRoute, browserHistory, hashHistory, Router} from 'react-router';
import { Provider } from 'react-redux'
import App from './App';
import Form from './components/Form/Form';
import Admin from './components/Admin/AdminPage';

import configureStore from "./store/configure-store";
var store = configureStore();

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Form}/>
      <Route path="Form" component={Form}/>
      <Route path="Admin/:id" component={Admin}/>
    </Route>
  </Router>
);
