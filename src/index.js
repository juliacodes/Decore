import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/extensions
import GlobalStyles from './reset.css.js';

const routing = (
    <Router>
        <div>
            <GlobalStyles />
            <Route exact path="/" component={App} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
