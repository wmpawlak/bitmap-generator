import React from "react";
import { SketchPicker } from "react-color";

const colorsPalette = ({ color, onChange }) => {
    const rgb = { r: color[0], g: color[1], b: color[2] };

    return <SketchPicker color={rgb} onChangeComplete={onChange} />;
};

export default colorsPalette;
