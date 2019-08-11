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
    numberOfFrames,
    numberOfPixels
}) => {
    const handleClick = () => {
        chooseFrame(index);
    };

    let background;

    let size;

    if (canvas) {
        const context = canvas.getContext("2d");

        const pixels = Uint8ClampedArray.from(
            activeFrameData.map(p => [...p, 100]).flat()
        );

        size =  Math.sqrt(numberOfPixels)

        const imgData = new ImageData(pixels, size, size);

        // var scale = window.devicePixelRatio; 
        // canvas.width = size * 1;
        // canvas.height = size * 1;

        // context.scale(scale, scale);

        context.imageSmoothingEnabled = false;

        context.putImageData(imgData, 0, 0);
        
        background = canvas.toDataURL();
    }

    return (
        <div
            className="preview-frame"
            onClick={handleClick}
            style={{
                width: size,
                height: size,
                transform: "scale(12)",
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
    numberOfFrames: state.reducer.listOfFrames.length,
    numberOfPixels: state.reducer.numberOfPixels
});

const mapDispatchToProps = {
    chooseFrame
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewFrame);
