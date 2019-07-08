import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import colorAssign from './colorAssign';
import downloadBoard from './downloadBoard';


export const defaultState = {
    squares: Array(16).fill([255, 255, 255])
}

const rootReducer = combineReducers({ colorAssign, downloadBoard, routing: routerReducer });

export default rootReducer;