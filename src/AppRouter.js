import React, { useState, useMemo } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppContext from './AppContext';
import ChooseTheme from './views/ChooseTheme';
import ChooseColors from './views/ChooseColors';
import Builder from './views/Builder';
import App from './App';

// eslint-disable-next-line import/extensions
import GlobalStyles from './reset.css.js';
import { premadeSchemes } from './store/premadeSchemes';

const AppRouter = () => {
    const [colors, setColors] = useState(premadeSchemes.default);
    const [layout, setLayout] = useState('landing');
    const value = useMemo(() => ({ colors, setColors, layout, setLayout }), [
        colors,
        setColors,
        layout,
        setLayout
    ]);

    return (
        <Router>
            <div>
                <GlobalStyles />
                <AppContext.Provider value={value}>
                    <Route exact path="/" component={App} />
                    <Route path="/theme" component={ChooseTheme} />
                    <Route path="/colors" component={ChooseColors} />
                    <Route path="/edit/:theme" component={Builder} />
                </AppContext.Provider>
            </div>
        </Router>
    );
};

export default AppRouter;
