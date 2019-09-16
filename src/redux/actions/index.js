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
  SET_SIZE,
  EDIT_FRAME,
  ANIMATION_SPEED
} from './actionTypes';

export const assignColor = index => ({
  type: ASSIGN_COLOR,
  index
});

export const resetBoard = () => ({
  type: RESET_BOARD
});

export const deleteFrame = index => ({
  type: DELETE_FRAME,
  index
});

export const downloadBoard = () => ({
  type: DOWNLOAD_BOARD
});

export const chooseColor = ({ rgb }) => ({
  type: CHOOSE_COLOR,
  color: [rgb.r, rgb.g, rgb.b]
});

export const mouseDown = () => ({
  type: MOUSE_DOWN
});

export const mouseUp = () => ({
  type: MOUSE_UP
});

export const addBefore = () => ({
  type: ADD_BEFORE
});

export const addAfter = () => ({
  type: ADD_AFTER
});

export const addCopy = () => ({
  type: ADD_COPY
});

export const chooseFrame = activeFrameIndex => ({
  type: CHOOSE_FRAME,
  activeFrameIndex
});

export const setSize = numberOfPixels => ({
  type: SET_SIZE,
  numberOfPixels
});

export const modalSwitch = () => ({
  type: MODAL_SWITCH
});

export const playAnimation = () => ({
  type: PLAY_ANIMATION
});

export const pauseAnimation = () => ({
  type: PAUSE_ANIMATION
});

export const stopAnimation = () => ({
  type: STOP_ANIMATION
});

export const editFrame = () => ({
  type: EDIT_FRAME
});

export const editAnimationSpeed = animationSpeed => ({
  type: ANIMATION_SPEED,
  payload: animationSpeed
});
