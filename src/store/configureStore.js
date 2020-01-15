import { createStore } from 'redux';
import colorsReducer from '../reducers/colors';

export default () => {
    // Create global store
    const store = createStore(colorsReducer);

    return store;
};
