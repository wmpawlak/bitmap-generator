import {
    ASSIGN_COLOR,
    RESET_BOARD,
    DELETE_FRAME,
    DOWNLOAD_BOARD,
    CHOOSE_COLOR,
    MOUSE_DOWN,
    MOUSE_UP,
    ADD_AFTER,
    CHOOSE_FRAME
} from "./actionTypes";

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

export const addAfter = () => ({
    type: ADD_AFTER
});

export const chooseFrame = activeFrameIndex => ({
    type: CHOOSE_FRAME,
    activeFrameIndex
});

export const modalSwitch = () => ({
    type: "MODAL_SWITCH"
});

export const playAnimation = () => ({
  type: "PLAY_ANIMATION"
});

export const pauseAnimation = () => ({
  type: "PAUSE_ANIMATION"
});

export const stopAnimation = () => ({
  type: "STOP_ANIMATION"
});
