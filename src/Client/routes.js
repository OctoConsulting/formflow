import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import App from './App';
import Form from './components/Form/Form';
import configureStore from "./store/configure-store";
var store = configureStore();

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Form}/>
      <Route path="Form" component={Form}/>
    </Route>
);
