import { combineReducers } from "redux";
//import { routerReducer } from "react-router-redux";
import assignColor from "./assignColor";

const emptyColor = [0, 0, 0];

export const defaultState = {
    squares: Array(64).fill(emptyColor),
    color: emptyColor,
    isMouseDown: false
};

const rootReducer = combineReducers({
    assignColor,
    //routing: routerReducer
});

export default rootReducer;
