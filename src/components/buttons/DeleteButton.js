import React from "react";
import { connect } from "react-redux";

import { deleteFrame } from "../../actions";

const DeleteButton = ({ deleteFrame }) => {
    return (
        <div className="preview-frame-delete" onClick={deleteFrame}>&#x2612;</div>
    );
};

export default connect(
    null,
    { deleteFrame }
)(DeleteButton);
