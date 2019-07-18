import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import colorAssign from "./colorAssign";
import downloadBoard from "./downloadBoard";

const emptyColor = [0, 0, 0];

export const defaultState = {
    squares: Array(64).fill(emptyColor),
    color: emptyColor
};

const rootReducer = combineReducers({
    colorAssign,
    downloadBoard,
    routing: routerReducer
});

export default rootReducer;
