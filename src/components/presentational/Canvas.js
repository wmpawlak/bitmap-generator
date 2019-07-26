import React from "react";
import { connect } from "react-redux";

import { renderCanvas } from "../../actions";

const Canvas = ({ renderCanvas }) => {
    return (
        <canvas id="canvas" onClick={renderCanvas}>
            
        </canvas>
    );
};

export default connect(
    null,
    { renderCanvas }
)(Canvas);
