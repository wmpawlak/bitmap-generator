import React from "react";
import { connect } from "react-redux";
import { mouseDown, mouseUp, assignColor } from "../../actions";

import Frame from "../presentational/Frame";

class Board extends React.Component {
    state = {
        frameAmount: 16
    };

    renderFrame(i) {
        const mapStateToProps = state => ({
            background: state.reducer.listOfFrames[state.reducer.activeFrameIndex][i],
            isMouseDown: state.reducer.isMouseDown,
            color: state.reducer.color
        })

        ;

        const mapDispatchToProps = {
            mouseDown,
            mouseUp,
            assignColor
        };

        const ConnectedFrame = connect(
            mapStateToProps,
            mapDispatchToProps
        )(Frame);

        return <ConnectedFrame index={i} />;
    }

    render() {
        return (
            <div className="board">
                {Array.from({ length: this.state.frameAmount }).map((s, i) => (
                    <div key={i}>{this.renderFrame(i)}</div>
                ))}
            </div>
        );
    }
}

export default Board;
