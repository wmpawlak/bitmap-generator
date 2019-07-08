export const colorAssigned = (index, color) => ({
    type: 'ASSIGN_COLOR',
    index,
    color
});

export const resetBoard = (squares) => ({
    type: 'RESET_BOARD',
    squares
});