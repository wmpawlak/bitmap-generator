import { combineReducers } from 'redux';

import reducer from './reducer';

const emptyColor = [0, 0, 0];

const initialNumberOfPixels = 64;

export const createFrame = (numberOfPixels, color = emptyColor) =>
  Array(numberOfPixels).fill(color);

const initialNumberOfFrames = 1;

const pixelSide = '12.5%';

export const defaultState = {
  activeFrameIndex: 0,
  color: emptyColor,
  isMouseDown: false,
  listOfFrames: Array.from({ length: initialNumberOfFrames }).fill(
    createFrame(initialNumberOfPixels)
  ),
  numberOfPixels: initialNumberOfPixels,
  isModalOn: false,
  frameIndexAnimation: 0,
  pixelSide: pixelSide
};

const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
