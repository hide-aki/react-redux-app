import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Router } from  'react-router-dom'
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import configureStore from "./store/configureStore";
import { loadCourses } from "./actions/courseActions";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = configureStore();

store.dispatch(loadCourses());

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
