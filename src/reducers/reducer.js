import { defaultState } from './index';
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
  PLAY_ANIMATION,
  PAUSE_ANIMATION,
  STOP_ANIMATION,
  CHANGE_SIZE
} from '../actions/actionTypes';

const reducer = (state = defaultState, action) => {
  if (action.type === ASSIGN_COLOR) {
    const framesCopy = [...state.listOfFrames[state.activeFrameIndex]];
    framesCopy[action.index] = state.color;
    const listOfFrames = [...state.listOfFrames];
    listOfFrames[state.activeFrameIndex] = framesCopy;
    return { ...state, listOfFrames };
  } else if (action.type === RESET_BOARD) {
    const framesClean = state.listOfFrames[state.activeFrameIndex].map(() => [
      0,
      0,
      0
    ]);
    const listOfFrames = [...state.listOfFrames];
    listOfFrames[state.activeFrameIndex] = framesClean;
    return { ...state, listOfFrames };
  } else if (action.type === DELETE_FRAME) {
    let activeFrameIndex;
    if (
      state.listOfFrames.length - 1 === action.index &&
      action.index === state.activeFrameIndex
    ) {
      activeFrameIndex = 0;
    } else {
      activeFrameIndex = state.activeFrameIndex;
    }

    return {
      ...state,
      listOfFrames: state.listOfFrames.filter((_, i) => i !== action.index),
      activeFrameIndex
    };
  } else if (action.type === CHOOSE_COLOR) {
    return { ...state, color: action.color };
  } else if (action.type === DOWNLOAD_BOARD) {
    const framesDownload = JSON.stringify(state.listOfFrames);
    const fileName = 'file';
    const fileToSave = new Blob([framesDownload], {
      type: 'application/json',
      name: fileName
    });
    saveAs(fileToSave, fileName);
    return { ...state };
  } else if (action.type === MOUSE_DOWN) {
    return { ...state, isMouseDown: true };
  } else if (action.type === MOUSE_UP) {
    return { ...state, isMouseDown: false };
  } else if (action.type === ADD_BEFORE) {
    let listOfFramesCopy = [...state.listOfFrames];
    listOfFramesCopy.splice(state.activeFrameIndex, 0, state.initialFrame);
    return {
      ...state,
      listOfFrames: listOfFramesCopy,
      activeFrameIndex: state.activeFrameIndex
    };
  } else if (action.type === ADD_AFTER) {
    let listOfFramesCopy = [...state.listOfFrames];
    listOfFramesCopy.splice(state.activeFrameIndex + 1, 0, state.initialFrame);
    return {
      ...state,
      listOfFrames: listOfFramesCopy,
      activeFrameIndex: state.activeFrameIndex + 1
    };
  } else if (action.type === ADD_COPY) {
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
  } else if (action.type === CHOOSE_FRAME) {
    return { ...state, activeFrameIndex: action.activeFrameIndex };
  } else if (action.type === CHANGE_SIZE) {
    const listOfFramesNew = [...state.listOfFrames].fill(
      Array(16).fill([0, 0, 0])
    );
    const newNumberOfPixels = 16;
    return {
      ...state,
      listOfFrames: listOfFramesNew,
      numberOfPixels: newNumberOfPixels
    };
  } else if (action.type === MODAL_SWITCH) {
    return {
      ...state,
      isModalOn: !state.isModalOn,
      frameIndexAnimation: 0
    };
  } else if (action.type === PLAY_ANIMATION) {
    const newframeIndexAnimation = state.frameIndexAnimation;
    return { ...state, frameIndexAnimation: newframeIndexAnimation + 1 };
  } else if (action.type === STOP_ANIMATION) {
    return { ...state, frameIndexAnimation: 0 };
  } else if (action.type === PAUSE_ANIMATION) {
    const newframeIndexAnimation = state.frameIndexAnimation;
    return { ...state, frameIndexAnimation: newframeIndexAnimation };
  } else {
    return state;
  }
};

export default reducer;
