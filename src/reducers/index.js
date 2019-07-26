import { combineReducers } from "redux";
//import { routerReducer } from "react-router-redux";
import assignColor from "./reducer";

const emptyColor = [0, 0, 0];

const initialFrame = Array(64).fill(emptyColor);

const initialNumberOfSquares = 2;

export const defaultState = {
    squares: 0,
    color: emptyColor,
    isMouseDown: false,
    activeSquare: 0,
    setOfSquares: Array(initialNumberOfSquares).fill(initialFrame)
};

const rootReducer = combineReducers({
    assignColor,
    //routing: routerReducer
});

export default rootReducer;
