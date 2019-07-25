import React from "react";
import { connect } from "react-redux";

import { addAfter } from "../../actions";

const AddAfterButton = props => {
    return (
        <button
            className="small ui grey button"
            onClick={addAfter}
        >
            ADD AFTER
        </button>
    );
};

export default connect(
    null,
    { addAfter }
)(AddAfterButton);