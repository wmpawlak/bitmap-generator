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
        const framesClean = state.listOfFrames[state.activeFrameIndex].map(() => [0, 0, 0]);
        const listOfFrames = [...state.listOfFrames];
        listOfFrames[state.activeFrameIndex] = framesClean;
        return { ...state, listOfFrames };

    } else if (action.type === "DELETE_FRAME") {
        const listOfFrames = [
            ...state.listOfFrames.slice(0, state.activeFrameIndex),
            ...state.listOfFrames.slice(state.activeFrameIndex + 1)
        ];
        return { ...state, listOfFrames: listOfFrames };

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
        return { ...state };

    } else if (action.type === "MOUSE_DOWN") {
        return { ...state, isMouseDown: true };

    } else if (action.type === "MOUSE_UP") {
        return { ...state, isMouseDown: false };

    } else if (action.type === "ADD_AFTER") {
        const listOfFramesCopy = [...state.listOfFrames, state.initialFrame];
        const newActiveFrameIndex = listOfFramesCopy.length - 1;
        return {
            ...state,
            listOfFrames: listOfFramesCopy,
            activeFrameIndex: newActiveFrameIndex
        };

    } else if (action.type === "CHOOSE_FRAME") {
        const newActiveFrameIndex = action.activeFrameIndex;
        return { ...state, activeFrameIndex: newActiveFrameIndex };

    } else if (action.type === "MODAL_SWITCH") {
        return { ...state, isModalOn: !state.isModalOn, frameIndexAnimation: 0 };

    } else if (action.type === "PLAY_ANIMATION") {
        const newframeIndexAnimation = state.frameIndexAnimation;
        if (state.frameIndexAnimation < state.listOfFrames.length - 1) {
            return { ...state, frameIndexAnimation: newframeIndexAnimation + 1 };
        } return{...state};

    } else {
        return state;
    }
};

export default reducer;
