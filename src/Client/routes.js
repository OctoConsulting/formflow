import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import App from './App';
import Log_In from './components/Log_In/Log_In';
import configureStore from "./store/configure-store";
var store = configureStore();

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Log_In}/>
      <Route path="login" component={Log_In}/>
    </Route>
);
