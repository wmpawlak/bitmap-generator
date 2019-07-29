import React from "react";
import { connect } from "react-redux";

import { chooseFrame } from "../../actions";

const PreviewFrame = ({
    index,
    chooseFrame,
    canvas,
    activeFrameIndex,
    activeFrameData
}) => {
    const handleClick = () => {
        chooseFrame(index);
    };

    let background;

    if (canvas) {
        const context = canvas.getContext("2d");

        const pixels = Uint8ClampedArray.from(
            activeFrameData.map(p => [...p, 100]).flat()
        );

        const imgData = new ImageData(pixels, 8, 8);

        context.putImageData(imgData, 0, 0);

        background = canvas.toDataURL();
    }

    return (
        <div
            className="preview-frame"
            onClick={handleClick}
            style={{
                background: "url(" + background + ")",
                borderColor: activeFrameIndex === index ? "red" : "grey"
            }}
        />
    );
};

const mapStateToProps = state => ({
    activeFrameIndex: state.reducer.activeFrameIndex
});

const mapDispatchToProps = {
    chooseFrame: chooseFrame
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewFrame);
