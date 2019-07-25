import React from "react";
import { connect } from "react-redux";

import { renderCanvas } from "../actions";

const SaveButton = ({ renderCanvas }) => {
    return (
        <button className="small ui grey button" onClick={renderCanvas}>
            SAVE
        </button>
    );
};

export default connect(
    null,
    { renderCanvas }
)(SaveButton);
