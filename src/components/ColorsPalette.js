import React from 'react';
import { SketchPicker } from 'react-color';

const colorsPalette = (props) => {

    return (
        <SketchPicker
            color={props.color}
            onChangeComplete={props.onChange}
        />
    );
}


export default colorsPalette;
