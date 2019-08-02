import React from "react";
import { connect } from "react-redux";

import { deleteFrame } from "../../actions";

const DeleteButton = ({ deleteFrame, index }) => {
    const handleClick=(e)=> {
        deleteFrame(index);
        e.stopPropagation();
    }
    return (
        <div className="preview-frame-delete" onClick={handleClick}>&#9701;</div>
    );
};

export default connect(
    null,
    { deleteFrame }
)(DeleteButton);
