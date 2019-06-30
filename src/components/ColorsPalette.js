import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class ColorsPalette extends Component {

    constructor(props) {
        super(props)

        console.log("in the constructior")

        this.state = {}
    }

    render() {
        console.log(this.state.rgb);
        return (
            <SketchPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
            />
        );
    }
}


export default ColorsPalette;
