import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from "./Board";
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";
import { connect } from "react-redux";
import { colorAssigned, resetBoard } from "../actions";

class ColoredBoard extends React.Component {
    state = {
        color: undefined
    };

    render() {
        return (
            <div className="brd">
                <div className="ui raised segment">
                    <Board
                        squares={this.props.squares}
                        onSquareClick={this.onSquareClick}
                    />
                </div>
                <div className="ui basic segment">
                    <ColorsPalette
                        color={this.state.color}
                        onChange={color => this.setState({ color })}
                    />
                </div>
                
                <div className="ui basic segment">
                    <div>
                        <div className="ui raised segment">
                            <DownloadButton />
                            <ResetButton 
                                squares={this.props.squares}
                                onResetClick={this.onResetClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onResetClick = (squares) => {
        this.props.resetBoard(squares);
    }

    onSquareClick = index => {
        if (this.state.color !== undefined) {
            const newColor = [
                this.state.color.rgb.r,
                this.state.color.rgb.g,
                this.state.color.rgb.b
            ];
            this.props.colorAssigned(index, newColor);
        }
    };
}

const mapStateToProps = state => ({
    squares: state.colorAssign.squares
});

const mapDispatchToProps = dispatch => ({
    colorAssigned: (index, color) => dispatch(colorAssigned(index, color)),
    resetBoard: (squares) => dispatch(resetBoard(squares))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColoredBoard);




