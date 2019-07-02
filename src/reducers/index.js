import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import colorAssign from './colorAssign';
import downloadBoard from './downloadBoard';



const rootReducer = combineReducers({ colorAssign, downloadBoard , routing: routerReducer });

export default rootReducer;