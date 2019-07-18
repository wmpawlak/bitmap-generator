import React from "react";
import { SketchPicker } from "react-color";

const colorsPalette = ({ color, onChange }) => {
    const rgb = { r: color[0], g: color[1], b: color[2] };
    return <SketchPicker color={rgb} onChangeComplete={onChange} />;
};

export default colorsPalette;

//głupie pytanie reactowe:
// const colorsPalette = ({ color, onChange }) => {                         <- to tutaj oznacza, że tak jakby z tej funkcji wysyłamy wyżej w hierarchii 'obiekt z color opisany jako tą stałą rgb opisaną niżej, przy evencie onChange, tak?
//     const rgb = { r: color[0], g: color[1], b: color[2] };               <-opisana stała
//     return <SketchPicker color={rgb} onChangeComplete={onChange} />;     <- a ten return działa tak jakby odwrotnie, bo on pobiera z komponentu sketchpicker cały ten obiekt z colorem, z które później rgb wyłuskuje wartości rgb?
// };