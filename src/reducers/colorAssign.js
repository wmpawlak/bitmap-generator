const defaultState = {
    squares: Array(16).fill([255, 255, 255])
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ASSIGN_COLOR':
            const squaresCopy = [...state.squares]
            squaresCopy[action.index] = action.color
            return { ...state, squares: squaresCopy }
        default:
            return state;
    }
}

export default reducer;