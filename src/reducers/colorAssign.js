import { defaultState } from './index';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ASSIGN_COLOR':
            const squaresCopy = [...state.squares]
            squaresCopy[action.index] = action.color
            return { ...state, squares: squaresCopy }
        case 'RESET_BOARD':
            const squaresClean = state.squares.map(() => [255, 255, 255])
            return { ...state, squares: squaresClean }
        default:
            return state;
    }
}


export default reducer;