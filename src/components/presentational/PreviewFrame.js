import React from "react";
import { connect } from "react-redux";

import { chooseFrame } from "../../actions";

const PreviewFrame = ({ chooseFrame }) => {
    return (
        <div className="preview-frame" onClick={chooseFrame}></div>
    );
};

export default connect(
    null,
    { chooseFrame }
)(PreviewFrame);
