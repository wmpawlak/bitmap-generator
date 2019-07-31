import { defaultState } from "./index";
import { saveAs } from "file-saver";

const reducer = (state = defaultState, action) => {

    if (action.type === "ASSIGN_COLOR") {
        const framesCopy = [...state.listOfFrames[state.activeFrameIndex]];
        framesCopy[action.index] = state.color;
        // const convert = [...state.listOfFrames[state.activeFrameIndex]].map(i => [...i, 100]);
        // const convertFlat = convert.flat();
        // const cvs = document.getElementById("canvas");
        // cvs.width = cvs.height = 8;
        // const ctx = cvs.getContext("2d");
        // const imgData = new ImageData(
        //     Uint8ClampedArray.from(convertFlat),
        //     8,
        //     8
        // );
        // ctx.putImageData(imgData, 0, 0);
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

    else if (action.type === "DELETE_FRAME") {
        // const deleteFrame = state.listOfFrames.splice(state.activeFrameIndex, 1);
        // const listOfFrames = [...state.listOfFrames];
        // listOfFrames[state.activeFrameIndex] = listOfFrames - deleteFrame;
        const listOfFrames = [...state.listOfFrames];
        let deleteFrame = state.listOfFrames.slice();
        deleteFrame.splice(action.activeFrameIndex - 1);
        console.log(deleteFrame)
        return { ...state, deleteFrame };
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

    else if (action.type === "MOUSE_DOWN") {
        return { ...state, isMouseDown: true };
    }

    else if (action.type === "MOUSE_UP") {
        return { ...state, isMouseDown: false };
    }

    else if (action.type === "ADD_AFTER") {
        const listOfFramesCopy = [...state.listOfFrames, state.initialFrame];
        const newActiveFrameIndex = listOfFramesCopy.length - 1;
        return {
            ...state,
            listOfFrames: listOfFramesCopy,
            activeFrameIndex: newActiveFrameIndex
        };
    }

    else if (action.type === "CHOOSE_FRAME") {
        const newActiveFrameIndex = action.activeFrameIndex;
        console.log(action.activeFrameIndex);
        return { ...state, activeFrameIndex: newActiveFrameIndex };
    }

    else {
        return state;
    }
};

export default reducer;
