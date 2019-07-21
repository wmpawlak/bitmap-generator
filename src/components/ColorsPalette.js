import React from 'react';
import Sketch from './Sketch';

const colorsPalette = (props) => {

    return (
        <Sketch
            color={props.color}
            onChangeComplete={props.onChange}
        />
    );
}


export default colorsPalette;
