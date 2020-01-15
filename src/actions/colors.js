export const changeColor = (color, hex) => ({
    type: 'CHANGE_COLOR',
    color,
    hex
});

export const changeAllColors = (colors) => ({
    type: 'CHANGE_ALL_COLORS',
    colors
});
