import React from "react";
import { connect } from "react-redux";

import ColorsPalette from "./ColorsPalette";
import Board from "./Board";
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton"
import DownloadButton from "./DownloadButton";
import { mouseUp } from "../actions";
import CenterMode from "./Carousel";

const ColoredBoard = ({ mouseUp }) => {
    return (
        <div>

        <div className="brd" onMouseLeave={mouseUp}>
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
                            <SaveButton />
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <div>
                <CenterMode />
            </div>
        </div>
    );
};

export default connect(
    null,
    { mouseUp }
)(ColoredBoard);
