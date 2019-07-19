import React from "react";
import ColorsPalette from "./ColorsPalette";
import Board from "./Board";
import ResetButton from "./ResetButton";
import DownloadButton from "./DownloadButton";

const ColoredBoard = () => {
    return (
        <div className="brd">
            <div className="ui raised segment" id="gridOne">
                <Board />
            </div>
            <div id="gridTwo">
                <div id="gridThree">
                    <ColorsPalette />
                </div>

                <div id="gridFour">
                    <div>
                        <div className="ui raised segment vertical buttons">
                            <DownloadButton />
                            <ResetButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColoredBoard;
