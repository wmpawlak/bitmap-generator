import React from "react";
import { connect } from "react-redux";
import { SketchPicker } from "react-color";

import { chooseColor } from "../actions";

const colorsPalette = ({ color, onChange }) => {
    const rgb = { r: color[0], g: color[1], b: color[2] };

    return <SketchPicker color={rgb} onChangeComplete={onChange} />;
};

const mapStateToProps = state => ({
    color: state.assignColor.color
});

const mapDispatchToProps = dispatch => ({
    onChange: color => dispatch(chooseColor(color))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(colorsPalette);
