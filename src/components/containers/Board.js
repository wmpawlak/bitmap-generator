import React from "react";
import { connect } from "react-redux";


import Frame from "../presentational/Frame";

class Board extends React.Component {
    renderFrame(i) {


        return <Frame index={i} />;
    };

    
    render() {
        return (
            <div className="board">
                {this.props.currentFrame.map((s, i) => (
                    <div key={i}>{this.renderFrame(i)}</div>
                ))}
            </div>
        );
    };
};

export default connect(state => ({currentFrame: state.reducer.listOfFrames[state.reducer.activeFrameIndex]}))(Board);
