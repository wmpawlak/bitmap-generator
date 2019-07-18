import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from "./Board";
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";
import { connect } from "react-redux";
import { assignColor, resetBoard, downloadBoard, chooseColor } from "../actions";

class ColoredBoard extends React.Component {
    render() {
        return (
            <div className="brd">
                <div className="ui raised segment" id="gridOne">
                    <Board
                        onSquareClick={this.onSquareClick}
                    />
                </div>
                <div id="gridTwo">
                    <div id="gridThree">
                        <ColorsPalette
                            color={this.props.color}
                            onChange={color => this.props.chooseColor({ color })}
                        />
                    </div>

                    <div id="gridFour">
                        <div>
                            <div className="ui raised segment vertical buttons">
                                <DownloadButton
                                    squares={this.props.squares} //squares nie 
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

    onResetClick = squares => {
        this.props.resetBoard(squares);
    };

    onDownloadClick = squares => {
        this.props.downloadBoard(squares);
    };

//spróbować zrobić jako reducer onSquareClick

    onSquareClick = index => {
        if (this.props.color !== undefined) {
            const newColor = [
                this.props.color[0],
                this.props.color[1],
                this.props.color[2]
            ];
            this.props.assignColor(index, newColor);
        }
    };
}

const mapStateToProps = state => ({
    squares: state.assignColor.squares,
    color: state.assignColor.color
});

const mapDispatchToProps = dispatch => ({
    assignColor: (index, color) => dispatch(assignColor(index, color)),
    resetBoard: squares => dispatch(resetBoard(squares)),
    downloadBoard: squares => dispatch(downloadBoard(squares)),
    chooseColor: color => dispatch(chooseColor(color))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColoredBoard);


//wyrzucić z map_state_to_props squares i wybór 