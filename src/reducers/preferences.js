const preferencesReducerDefaultState = {
    projectTitle: 'Lorem ipsum',
    projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, etiam non purus euismod.',
    metaTags: true
};

const preferencesReudcer = (state = preferencesReducerDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_PREFERENCE':
            return {
                ...state,
                [action.state]: action.value
            };
        default:
            return state;
    }
};

export default preferencesReudcer;
