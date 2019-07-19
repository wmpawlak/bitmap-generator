export const assignColor = index => ({
    type: "ASSIGN_COLOR",
    index
});

export const resetBoard = squares => ({
    type: "RESET_BOARD",
    squares
});

export const downloadBoard = squares => ({
    type: "DOWNLOAD_BOARD",
    squares
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
