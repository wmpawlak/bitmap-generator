import { defaultState } from "./index";
import { saveAs } from "file-saver";

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ASSIGN_COLOR":
            const squaresCopy = [...state.squares];
            squaresCopy[action.index] = state.color;
            return { ...state, squares: squaresCopy };

        case "RESET_BOARD":
            const squaresClean = state.squares.map(() => [0, 0, 0]);
            return { ...state, squares: squaresClean };

        case "CHOOSE_COLOR":
            return { ...state, color: action.color };

        case "DOWNLOAD_BOARD":
            const squaresDownload = JSON.stringify(state.squares);
            const fileName = "file";
            const fileToSave = new Blob([squaresDownload], {
                type: "application/json",
                name: fileName
            });
            saveAs(fileToSave, fileName);
            const convert = [...state.squares].map((i) => [i,100]);
            const convertFlat = convert.flat(Infinity);
            
            const cvs = document.getElementById("canvas");
            cvs.width = cvs.height = 8;
            const ctx = cvs.getContext("2d");
            const imgData = new ImageData(Uint8ClampedArray.from(convertFlat), 8, 8);
            ctx.putImageData(imgData, 0, 0);

            return { ...state };

        case "MOUSE_DOWN":
            return { ...state, isMouseDown: true };

        case "MOUSE_UP":
            return { ...state, isMouseDown: false };

        default:
            return state;
    }
};

export default reducer;
