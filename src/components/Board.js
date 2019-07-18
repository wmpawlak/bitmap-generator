import React from "react";
import { connect } from "react-redux";

import Square from "./Square";

class Board extends React.Component {
    renderSquare(i) {
        const mapStateToProps = state => ({ background: state.assignColor.squares[i]}); //czy istnieje jedna funkcja map_state_to_props? I za każdym razem gdy ją wywołujemy, to podłączamy się do store'u? Co DOŁADNIE się tutaj dzieje?
        const ConnectedSquare = connect(mapStateToProps)(Square);
        
        return (
            <ConnectedSquare
                index={i}
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
