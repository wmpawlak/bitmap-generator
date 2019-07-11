import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from "./Board";
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";
import { connect } from "react-redux";
import { colorAssigned, resetBoard, downloadBoard } from "../actions";

class ColoredBoard extends React.Component {
    state = {
        color: undefined
    };

    render() {
        return (
            <div className="brd">
                <div className="ui raised segment" id="gridOne">
                    <Board
                        squares={this.props.squares}
                        onSquareClick={this.onSquareClick}
                    />
                </div>
                <div id="gridTwo">
                    <div  id="gridThree">
                        <ColorsPalette
                            color={this.state.color}
                            onChange={color => this.setState({ color })}
                        />
                    </div>
                    
                    <div id="gridFour">
                        <div>
                            <div className="ui raised segment vertical buttons">
                                <DownloadButton 
                                    squares={this.props.squares}
                                    onDownloadClick={this.onDownloadClick}
                                />
                                <ResetButton 
                                    squares={this.props.squares}
                                    onResetClick={this.onResetClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onResetClick = (squares) => {
        this.props.resetBoard(squares);
    }

    onDownloadClick = (squares) => {
        this.props.downloadBoard(squares);
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
    resetBoard: (squares) => dispatch(resetBoard(squares)),
    downloadBoard: (squares) => dispatch(downloadBoard(squares))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColoredBoard);




