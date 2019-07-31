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

    // const previewFrameDelete = () => {
    //     console.log("delete")
    // }
    // const previewFrameDelete = (PreviewFrame, index) => {
    //    console.log("delete")
    //        let previewFrameList = [...this.state.listOfFrames]
    //        previewFrameList.splice(index, 1);
    //        this.setState({previewFrameList: previewFrameList})
    //  }

    let background;

    if (canvas) {

        const context = canvas.getContext("2d");

        const pixels = Uint8ClampedArray.from(activeFrameData.map(p => [...p, 100]).flat())

        const imgData = new ImageData(
            pixels,
            8,
            8
        );

        context.putImageData(
            imgData,

            0,
            0
        );

        background = canvas.toDataURL();
    }

    return (
        <div
            className="preview-frame"
            onClick={handleClick}
            style={{
                background: "url(" + background + ")",
                //borderColor: activeFrameIndex === index ? "black" : "grey",
                boxShadow: activeFrameIndex === index ? "0px 0px 1px 1px white" : "0px 0px 1px rgb(140, 140, 140)"
            }}
        >
            <div className="preview-frame-delete" 
                //onClick={(e)=>{
                //previewFrameDelete(PreviewFrame, index);
            //}}
                //onClick={previewFrameDelete}
                >&#x2612;
            </div>
        </div>
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
