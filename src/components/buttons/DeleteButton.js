import React from "react";
import { connect } from "react-redux";

import { deleteFrame } from "../../actions";

const DeleteButton = ({ deleteFrame }) => {
    return (
        <button className="small ui grey button" onClick={deleteFrame}>
            DELETE
        </button>
    );
};

export default connect(
    null,
    { deleteFrame }
)(DeleteButton);
