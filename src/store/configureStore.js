import { createStore, combineReducers } from 'redux';
import colorsReducer from '../reducers/colors';
import preferencesReducer from '../reducers/preferences';

export default () => {
    // Create global store
    const store = createStore(
        combineReducers({
            colors: colorsReducer,
            preferences: preferencesReducer
        }),
    );

    return store;
};
