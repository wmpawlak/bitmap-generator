import { defaultState, createFrame } from './index';
import { saveAs } from 'file-saver';
import {
  ASSIGN_COLOR,
  RESET_BOARD,
  DELETE_FRAME,
  DOWNLOAD_BOARD,
  CHOOSE_COLOR,
  MOUSE_DOWN,
  MOUSE_UP,
  ADD_AFTER,
  ADD_BEFORE,
  ADD_COPY,
  CHOOSE_FRAME,
  MODAL_SWITCH,
  SET_SIZE,
  PLAY_ANIMATION,
  PAUSE_ANIMATION,
  STOP_ANIMATION,
  EDIT_FRAME
} from '../actions/actionTypes';

const PIXEL_SIDES = { 16: '25%', 64: '12.5%', 256: '6.2%' };

export const reducer = (state = defaultState, action) => {
  if (action.type === ASSIGN_COLOR) {
    const framesCopy = [...state.listOfFrames[state.activeFrameIndex]];
    framesCopy[action.index] = state.color;
    const listOfFrames = [...state.listOfFrames];
    listOfFrames[state.activeFrameIndex] = framesCopy;
    return { ...state, listOfFrames };
  }
  if (action.type === RESET_BOARD) {
    const framesClean = state.listOfFrames[state.activeFrameIndex].map(() => [0, 0, 0]);
    const listOfFrames = [...state.listOfFrames];
    listOfFrames[state.activeFrameIndex] = framesClean;
    return { ...state, listOfFrames };
  }
  if (action.type === DELETE_FRAME) {
    const listOfFramesCopy = [...state.listOfFrames];
    let newActiveFrameIndex;
    if (action.index > state.activeFrameIndex) {
      newActiveFrameIndex = state.activeFrameIndex;
    } else if (state.activeFrameIndex === 0) {
      newActiveFrameIndex = 0;
    } else {
      newActiveFrameIndex = state.activeFrameIndex - 1;
    }
    listOfFramesCopy.splice(action.index, 1);
    return {
      ...state,
      activeFrameIndex: newActiveFrameIndex,
      listOfFrames: listOfFramesCopy
    };
  }
  if (action.type === CHOOSE_COLOR) {
    return { ...state, color: action.color };
  }
  if (action.type === DOWNLOAD_BOARD) {
    const framesDownload = JSON.stringify(state.listOfFrames);
    const fileName = 'file';
    const fileToSave = new Blob([framesDownload], {
      type: 'application/json',
      name: fileName
    });
    saveAs(fileToSave, fileName);
    return { ...state };
  }
  if (action.type === MOUSE_DOWN) {
    return { ...state, isMouseDown: true };
  }
  if (action.type === MOUSE_UP) {
    return { ...state, isMouseDown: false };
  }
  if (action.type === ADD_BEFORE) {
    let listOfFramesCopy = [...state.listOfFrames];
    listOfFramesCopy.splice(
      state.activeFrameIndex,
      0,
      createFrame(state.numberOfPixels)
    );
    return {
      ...state,
      listOfFrames: listOfFramesCopy,
      activeFrameIndex: state.activeFrameIndex
    };
  }
  if (action.type === ADD_AFTER) {
    const listOfFramesCopy = [...state.listOfFrames];
    listOfFramesCopy.splice(
      state.activeFrameIndex + 1,
      0,
      createFrame(state.numberOfPixels)
    );
    return {
      ...state,
      listOfFrames: listOfFramesCopy,
      activeFrameIndex: state.activeFrameIndex + 1,
      pixelSide: state.pixelSide
    };
  }
  if (action.type === ADD_COPY) {
    let listOfFramesCopy = [...state.listOfFrames];
    listOfFramesCopy.splice(
      state.activeFrameIndex + 1,
      0,
      state.listOfFrames[state.activeFrameIndex]
    );
    return {
      ...state,
      listOfFrames: listOfFramesCopy,
      activeFrameIndex: state.activeFrameIndex + 1
    };
  }
  if (action.type === CHOOSE_FRAME) {
    return { ...state, activeFrameIndex: action.activeFrameIndex };
  }
  if (action.type === MODAL_SWITCH) {
    return {
      ...state,
      isModalOn: !state.isModalOn,
      frameIndexAnimation: 0
    };
  }
  if (action.type === SET_SIZE) {
    const numberOfPixels = action.numberOfPixels;
    const pixelSide = PIXEL_SIDES[numberOfPixels];
    return {
      ...state,
      listOfFrames: [createFrame(numberOfPixels)],
      numberOfPixels,
      pixelSide
    };
  }
  if (action.type === PLAY_ANIMATION) {
    const newframeIndexAnimation = state.frameIndexAnimation;
    return { ...state, frameIndexAnimation: newframeIndexAnimation + 1 };
  }
  if (action.type === STOP_ANIMATION) {
    return { ...state, frameIndexAnimation: 0 };
  }
  if (action.type === PAUSE_ANIMATION) {
    const newframeIndexAnimation = state.frameIndexAnimation;
    return { ...state, frameIndexAnimation: newframeIndexAnimation };
  }
  if (action.type === EDIT_FRAME) {
    return {
      ...state,
      activeFrameIndex: state.frameIndexAnimation,
      isModalOn: false
    };
  } else {
    return state;
  }
};
