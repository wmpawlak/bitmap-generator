import React from 'react';
import Square from './Square';

class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={i}
            color={this.props.squares[i]}
            onClick={() => this.props.onSquareClick(i)}
        />;
    }

    render() {   

        const squares = []
      
        for (let i = 0; i <= 63; i++) {
            squares.push(<div key={i}>{this.renderSquare(i)}</div>)
        }

        return (
            <div className="board">
                <div className="board-row">
                    {squares.slice(0,8)}
                </div>
                <div className="board-row">
                    {squares.slice(8,16)}
                </div>
                <div className="board-row">
                    {squares.slice(16,24)}
                </div>
                <div className="board-row">
                    {squares.slice(24,32)}
                </div>
                <div className="board-row">
                    {squares.slice(32,40)}  
                </div>
                <div className="board-row">
                    {squares.slice(40,48)}
                </div>
                <div className="board-row">
                    {squares.slice(48,56)}
                </div>
                <div className="board-row">
                    {squares.slice(56,64)}
                </div>
            </div>
        );
    }
}

export default Board;
