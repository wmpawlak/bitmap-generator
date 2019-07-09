import { defaultState } from './index';
import { saveAs } from 'file-saver';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ASSIGN_COLOR':
            const squaresCopy = [...state.squares]
            squaresCopy[action.index] = action.color
            return { ...state, squares: squaresCopy }
        case 'RESET_BOARD':
            const squaresClean = state.squares.map(() => [255, 255, 255])
            return { ...state, squares: squaresClean }
        case 'DOWNLOAD_BOARD':
            const squaresDownload = JSON.stringify(state.squares)
            const fileName = "file";
            const fileToSave = new Blob([squaresDownload], {
                type: 'application/json',
                name: fileName
            });      
            saveAs(fileToSave, fileName);
            return { ...state }
        default:
            return state;
    }
}

export default reducer;