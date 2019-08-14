import { combineReducers } from 'redux';

import reducer from './reducer';

const emptyColor = [0, 0, 0];

const initialNumberOfPixels = 64;

const initialFrame = Array(initialNumberOfPixels).fill(emptyColor);

const initialNumberOfFrames = 1;

const pixelWidth = '50px';

const pixelHeight = '50px';

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
  pixelWidth: pixelWidth,
  pixelHeight: pixelHeight
};

const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
