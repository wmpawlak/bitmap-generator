import { defaultState } from "./index";
import { saveAs } from "file-saver";

const reducer = (state = defaultState, action) => {
    if (action.type === "ASSIGN_COLOR") {
        const framesCopy = [...state.listOfFrames[state.activeFrameIndex]];
        framesCopy[action.index] = state.color;
        const listOfFrames = [...state.listOfFrames];
        listOfFrames[state.activeFrameIndex] = framesCopy;
        return { ...state, listOfFrames };
    } else if (action.type === "RESET_BOARD") {
        const framesClean = state.listOfFrames[state.activeFrameIndex].map(
            () => [0, 0, 0]
        );
        const listOfFrames = [...state.listOfFrames];
        listOfFrames[state.activeFrameIndex] = framesClean;
        return { ...state, listOfFrames };
    } else if (action.type === "DELETE_FRAME") {
        let activeFrameIndex
        if (state.listOfFrames.length -1 === action.index && action.index === state.activeFrameIndex) {
            activeFrameIndex = 0
        } else {
            activeFrameIndex = state.activeFrameIndex
        }
        return { ...state, listOfFrames: state.listOfFrames.filter((_, i) => i!==action.index), activeFrameIndex};
    } else if (action.type === "CHOOSE_COLOR") {
        return { ...state, color: action.color };
    } else if (action.type === "DOWNLOAD_BOARD") {
        const framesDownload = JSON.stringify(state.listOfFrames);
        const fileName = "file";
        const fileToSave = new Blob([framesDownload], {
            type: "application/json",
            name: fileName
        });
        saveAs(fileToSave, fileName);
        
    } else if (action.type === "MOUSE_DOWN") {
        return { ...state, isMouseDown: true };
    } else if (action.type === "MOUSE_UP") {
        return { ...state, isMouseDown: false };
    } else if (action.type === "ADD_AFTER") {
        const listOfFramesCopy = [...state.listOfFrames, state.initialFrame];
        return {
            ...state,
            listOfFrames: listOfFramesCopy,
        };
    } else if (action.type === "CHOOSE_FRAME") {
        return { ...state, activeFrameIndex: action.activeFrameIndex };

    } else if (action.type === "CHANGE_SIZE") {
        const listOfFramesNew = [...state.listOfFrames].fill(Array(16).fill([0,0,0]));
        const newNumberOfPixels = 16;
        return { ...state, listOfFrames: listOfFramesNew, numberOfPixels: newNumberOfPixels };

    } else {
        return state;
    }
};

export default reducer;
