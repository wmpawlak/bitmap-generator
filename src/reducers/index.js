import { combineReducers } from 'redux';

import reducer from './reducer';

const emptyColor = [0, 0, 0];

const initialNumberOfPixels = 64;

const initialFrame = Array(initialNumberOfPixels).fill(emptyColor);

const initialNumberOfFrames = 1;

const pixelSide = '50px';

export const defaultState = {
  initialFrame: initialFrame,
  activeFrameIndex: 0,
  color: emptyColor,
  isMouseDown: false,
  listOfFrames: Array.from({ length: initialNumberOfFrames }).fill(
    initialFrame
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
