import { combineReducers } from "redux";

import reducer from "./reducer";

const emptyColor = [0, 0, 0];

const initialFrame = Array(64).fill(emptyColor);

const initialNumberOfFrames = 1;

export const defaultState = {
    initialFrame: initialFrame,
    activeFrameIndex: 0,
    color: emptyColor,
    isMouseDown: false,
    listOfFrames: Array.from({ length: initialNumberOfFrames }).fill(
        initialFrame
    )
};

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;
