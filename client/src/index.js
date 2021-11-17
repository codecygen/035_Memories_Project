import React from 'react';
import ReactDOM from 'react-dom';
// react-redux is the official redux UI binding library for react
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

// This is a redux function
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// The <Provider> component makes the 
// Redux store available to any nested 
// components that need to access the Redux store.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);