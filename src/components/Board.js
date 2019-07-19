import React from "react";
import { connect } from "react-redux";

import Square from "./Square";

class Board extends React.Component {
    renderSquare(i) {
        const mapStateToProps = state => ({
            background: state.assignColor.squares[i],
            isMouseDown: state.mouseDown.isMouseDown
        });

        //czy istnieje jedna funkcja map_state_to_props? I za każdym razem gdy ją wywołujemy, to podłączamy się do store'u? Co DOŁADNIE się tutaj dzieje?

        const ConnectedSquare = connect(mapStateToProps)(Square);

        const handleDown = () => {
            this.props.mouseDown(isMouseDown);
        };

        const handleUp = () => {
            this.props.mouseDown(isMouseDown);
        };

        const handleMove = () => {
            if (this.props.isMouseDown) {
                this.props.onClick();
            }
        };

        return (
            <ConnectedSquare
                index={i}
                onClick={() => this.props.onSquareClick(i)}
                onMouseDown={() => {this.props.handleDown()}}
                onMouseUp={() => {this.props.handleUp()}}
                onMouseEnter={() => {this.props.handleMove()}}
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
