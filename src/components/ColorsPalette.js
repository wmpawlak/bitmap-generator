import React from 'react';
import Sketch from './Sketch';


import { chooseColor } from "../actions";
    return (
        <Sketch
            color={props.color}
            onChangeComplete={props.onChange}
        />
    );
}


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
