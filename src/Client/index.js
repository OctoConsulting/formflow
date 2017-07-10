//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import configureStore from './store/configure-store';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//store contains the current redux state -- everything flows through reducers
const store = createStoreWithMiddleware(reducers);
//New Component

//Showing HTML in the DOM

//This renders the routes defined in routes.js
ReactDOM.render(<Provider store={store}><Router history={browserHistory} routes={routes}/></Provider>
	, document.querySelector('.container'));
