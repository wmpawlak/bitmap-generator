export const assignColor = index => ({
    type: "ASSIGN_COLOR",
    index
});

export const resetBoard = () => ({
    type: "RESET_BOARD"
});

export const deleteFrame = index => ({
    type: "DELETE_FRAME",
    index
});

export const downloadBoard = () => ({
    type: "DOWNLOAD_BOARD"
});

export const chooseColor = ({ rgb }) => ({
    type: "CHOOSE_COLOR",
    color: [rgb.r, rgb.g, rgb.b]
});

export const mouseDown = () => ({
    type: "MOUSE_DOWN"
});

export const mouseUp = () => ({
    type: "MOUSE_UP"
});

export const renderCanvas = activeFrameIndex => ({
    type: "RENDER_CANVAS",
    activeFrameIndex
});

export const addAfter = activeFrameIndex => ({
    type: "ADD_AFTER",
    activeFrameIndex
});

export const chooseFrame = activeFrameIndex => ({
    type: "CHOOSE_FRAME",
    activeFrameIndex
});

export const modalSwitch = () => ({
    type: "MODAL_SWITCH"
});

export const playAnimation = () => ({
  type: "PLAY_ANIMATION"
});
