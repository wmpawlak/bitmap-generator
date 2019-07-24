import { combineReducers } from "redux";
//import { routerReducer } from "react-router-redux";
import assignColor from "./assignColor";

const emptyColor = [0, 0, 0];

const initialFrame = Array(64).fill(emptyColor);

export const defaultState = {
    squares: initialFrame,
    color: emptyColor,
    isMouseDown: false,
    activeFrame: 0,
    setOfSquares: Array(7).fill(initialFrame)
};

const rootReducer = combineReducers({
    assignColor,
    //routing: routerReducer
});

export default rootReducer;
