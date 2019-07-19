import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from "./Board";
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";
import { connect } from "react-redux";
import { resetBoard, downloadBoard, chooseColor } from "../actions";

const ColoredBoard = ({ color, chooseColor, downloadBoard, resetBoard }) => {
    return (
        <div className="brd">
            <div className="ui raised segment" id="gridOne">
                <Board />
            </div>
            <div id="gridTwo">
                <div id="gridThree">
                    <ColorsPalette color={color} onChange={chooseColor} />
                </div>

                <div id="gridFour">
                    <div>
                        <div className="ui raised segment vertical buttons">
                            <DownloadButton onDownloadClick={downloadBoard} />
                            <ResetButton onResetClick={resetBoard} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    color: state.assignColor.color
});

const mapDispatchToProps = {
    resetBoard,
    downloadBoard,
    chooseColor
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColoredBoard);
