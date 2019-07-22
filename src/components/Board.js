import React from "react";
import { connect } from "react-redux";
import { mouseDown, mouseUp, assignColor } from "../actions";

import Square from "./Square";

class Board extends React.Component {
    renderSquare(i) {
        const mapStateToProps = state => ({
            background: state.assignColor.squares[i],
            isMouseDown: state.assignColor.isMouseDown
        });

        const mapDispatchToProps = {
            mouseDown,
            mouseUp,
            assignColor
        };

        const ConnectedSquare = connect(
            mapStateToProps,
            mapDispatchToProps
        )(Square);

        return <ConnectedSquare index={i} />;
    }

    render() {
        return (
            <div className="board">
                {Array.from({ length: 64 }).map((s, i) => (
                    <div key={i}>{this.renderSquare(i)}</div>
                ))}
            </div>
        );
    }
}

export default Board;
