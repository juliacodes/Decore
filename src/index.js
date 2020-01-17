import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ChooseTheme from './views/ChooseTheme';
import ChooseColors from './views/ChooseColors';
import Builder from './views/Builder';
import App from './App';
import ErrorPage from './views/ErrorPage';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/extensions
import GlobalStyles from './reset.css.js';

const store = configureStore();

const routing = (
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <GlobalStyles />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/theme' component={ChooseTheme} />
                <Route path='/colors' component={ChooseColors} />
                <Route path='/edit/:theme' component={Builder} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
