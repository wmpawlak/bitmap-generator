import React from "react";
import { connect } from "react-redux";

import DeleteButton from "../buttons/DeleteButton"
import { chooseFrame } from "../../actions";

const PreviewFrame = ({
    index,
    chooseFrame,
    canvas,
    activeFrameIndex,
    activeFrameData,
    numberOfFrames
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

        var scale = window.devicePixelRatio; 
        canvas.width = 8 * 1;
        canvas.height = 8 * 1;

        context.scale(scale, scale);

        context.imageSmoothingEnabled = false;

        context.putImageData(imgData, 0, 0);
        
        background = canvas.toDataURL();
    }

    return (
        <div
            className="preview-frame"
            onClick={handleClick}
            style={{
                background: "url(" + background + ")",
                boxShadow: activeFrameIndex === index ? "0px 0px 1px 1px white" : "0px 0px 1px rgb(140, 140, 140)"
            }}
        >
            {numberOfFrames > 1 && <DeleteButton index={index} />}
        </div>
    );
};

const mapStateToProps = state => ({
    activeFrameIndex: state.reducer.activeFrameIndex,
    numberOfFrames: state.reducer.listOfFrames.length
});

const mapDispatchToProps = {
    chooseFrame
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewFrame);
