import { defaultState } from "./index";
import { saveAs } from "file-saver";

const reducer = (state = defaultState, action) => {

    if (action.type === "ASSIGN_COLOR") {
        const framesCopy = [...state.listOfFrames[state.activeFrameIndex]];
        framesCopy[action.index] = state.color;
        const listOfFrames = [...state.listOfFrames];
        listOfFrames[state.activeFrameIndex] = framesCopy;
        return { ...state, listOfFrames };
    }
    else if (action.type === "RESET_BOARD") {
        const framesClean = state.listOfFrames[state.activeFrameIndex].map(() => [0, 0, 0]);
        const listOfFrames = [...state.listOfFrames];
        listOfFrames[state.activeFrameIndex] = framesClean;
        return { ...state, listOfFrames };
    }

    else if (action.type === "CHOOSE_COLOR") {
        return { ...state, color: action.color };
    }

    else if (action.type === "DOWNLOAD_BOARD") {
        const framesDownload = JSON.stringify(state.listOfFrames);
        const fileName = "file";
        const fileToSave = new Blob([framesDownload], {
            type: "application/json",
            name: fileName
        });
        saveAs(fileToSave, fileName);
        return { ...state };
    }

    else if (action.type === "RENDER_CANVAS") {
        const convert = [...state.activeFrameIndex].map(i => [i, 100]);
        const convertFlat = convert.flat(Infinity);
        const cvs = document.getElementById("canvas");
        cvs.width = cvs.height = 8;
        const ctx = cvs.getContext("2d");
        const imgData = new ImageData(Uint8ClampedArray.from(convertFlat), 8, 8);
        ctx.putImageData(imgData, 0, 0);
        return { ...state };
    }

    else if (action.type === "MOUSE_DOWN") {
        return { ...state, isMouseDown: true };
    }

    else if (action.type === "MOUSE_UP") {
        return { ...state, isMouseDown: false };
    }
        
    else if (action.type === "CHOOSE_FRAME") {
        return { ...state, activeFrameIndex: action.index };
    }    

    else if (action.type === "ADD_AFTER") {
        const listOfFramesCopy = [...state.listOfFrames, defaultState.activeFrameIndex];
        console.log('listOfFramesCopy', listOfFramesCopy);
        console.log('state.listOfFrames', state.listOfFrames);
        console.log('defaultState.activeFrameIndex', defaultState.activeFrameIndex);
        
        return {
            ...state,
            listOfFrames: listOfFramesCopy,
            activeFrameIndex: listOfFramesCopy.length - 1
        };
    }

    else {
        return state;
    }
};

export default reducer;
