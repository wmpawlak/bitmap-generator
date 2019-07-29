import React from "react";
import { connect } from "react-redux";

import { chooseFrame } from "../../actions";

const PreviewFrame = ({ index, chooseFrame }) => {
    const handleClick = () => {
        chooseFrame(index)
    }
    return (
        <div className="preview-frame" onClick={handleClick}></div>
    );
};

const mapStateToProps = state => ({
    activeFrameIndex: state.reducer.activeFrameIndex
});

const mapDispatchToProps = {
    chooseFrame: chooseFrame
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewFrame);
