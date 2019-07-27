import { combineReducers } from "redux";
//import { routerReducer } from "react-router-redux";
import reducer from "./reducer";

const emptyColor = [0, 0, 0];

const initialFrame = Array(64).fill(emptyColor);

const initialNumberOfFrames = 1;

export const defaultState = {
    activeFrameIndex: 0,
    color: emptyColor,
    isMouseDown: false,
    listOfFrames: Array(initialNumberOfFrames).fill(initialFrame)
};

const rootReducer = combineReducers({
    reducer,
    //routing: routerReducer
});

export default rootReducer;
