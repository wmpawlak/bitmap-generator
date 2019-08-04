import React from "react";
import { connect } from "react-redux";

import { deleteFrame } from "../../actions";

const DeleteButton = ({ deleteFrame, index }) => {
    const handleClick=(e)=> {
        deleteFrame(index);
        e.stopPropagation();
    }
    return (
        <i id="delButton" className="close icon" onClick={handleClick}></i>
    );
};

export default connect(
    null,
    { deleteFrame }
)(DeleteButton);
