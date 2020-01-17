const colorsReducerDefaultState = {
    colorOne: '#4ECDC4',
    colorTwo: '#A7EEE9',
    colorThree: '#FF6B6B',
    colorFour: '#FFAAAA',
    colorFive: '#FFEB8C',
    colorSix: '#FFF4C1',
    colorSeven: '#D4D4D4',
    colorEight: '#EFF3EF'
};

const colorsReducer = (state = colorsReducerDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                [action.color]: action.hex
            };
        case 'CHANGE_ALL_COLORS':
            return {
                // Had to individually set them because object was being sent with prototype inside it
                colorOne: action.colors.colorOne,
                colorTwo: action.colors.colorTwo,
                colorThree: action.colors.colorThree,
                colorFour: action.colors.colorFour,
                colorFive: action.colors.colorFive,
                colorSix: action.colors.colorSix,
                colorSeven: action.colors.colorSeven,
                colorEight: action.colors.colorEight,
            }
        default:
            return state;
    }
};

export default colorsReducer;
