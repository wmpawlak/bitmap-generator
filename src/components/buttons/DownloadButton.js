import React from "react";
import { connect } from "react-redux";

import { downloadBoard } from "../../actions";

const DownloadButton = ({ downloadBoard }) => {
    return (
        <button className="small ui grey button" onClick={downloadBoard}>
            DOWNLOAD
        </button>
    );
};

export default connect(
    null,
    { downloadBoard }
)(DownloadButton);
