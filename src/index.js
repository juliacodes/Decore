import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ChooseTheme from './views/ChooseTheme';
import ChooseColors from './views/ChooseColors';
import Builder from './views/Builder';
import App from './App';
import ErrorPage from './views/ErrorPage';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/extensions
import GlobalStyles from './reset.css.js';

const routing = (
    <Router>
        <div>
            <GlobalStyles />
            <Route exact path='/' component={App} />
            <Route path='/theme' component={ChooseTheme} />
            <Route path='/colors' component={ChooseColors} />
            <Route path='/edit/:theme' component={Builder} />
            <Route component={ErrorPage} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
