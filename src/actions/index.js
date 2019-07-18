export const assignColor = (index, color) => ({
    type: "ASSIGN_COLOR",
    index,
    color
});

export const resetBoard = squares => ({
    type: "RESET_BOARD",
    squares
});

export const downloadBoard = squares => ({
    type: "DOWNLOAD_BOARD",
    squares
});

export const chooseColor = ({ color }) => ({
    type: "CHOOSE_COLOR",
    color: [color.rgb.r, color.rgb.g, color.rgb.b]
});
