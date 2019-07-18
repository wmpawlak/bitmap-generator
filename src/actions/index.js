export const colorAssigned = (index, color) => ({
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

export const setColor = ({ color }) => ({
    type: "SET_COLOR",
    color: [color.rgb.r, color.rgb.g, color.rgb.b]
});
