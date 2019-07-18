import React from "react";
import { connect } from "react-redux";

import Square from "./Square";

class Board extends React.Component {
    renderSquare(i) {
        const mapStateToProps = state => ({background: state.colorAssign.squares[i]});
        const ConnectedSquare = connect(mapStateToProps)(Square);
        return (
            <ConnectedSquare
                value={i}
                onClick={() => this.props.onSquareClick(i)}
                onMouseDown={() => {}}
                onMouseUp={() => {}}
                isMouseDown={true}
            />
        );
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
