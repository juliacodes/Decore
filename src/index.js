import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ChooseTheme from './views/chooseTheme';
import ChooseColors from './views/chooseColors';
import Builder from './views/builder';
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/extensions
import GlobalStyles from './reset.css.js';

const routing = (
    <Router>
        <div>
            <GlobalStyles />
            <Route exact path="/" component={App} />
            <Route path="/theme" component={ChooseTheme} />
            <Route path="/colors" component={ChooseColors} />
            <Route path="/edit/:theme" component={Builder} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
