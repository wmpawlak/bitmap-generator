import React from "react";
//import downloadFile from '../reducers/downloadBoard'

class DownloadButton extends React.Component {

    render() {
        return (
            <button
                className="small ui grey basic button"
                //onClick={() => this.setState({ value: 'X' })}
                //onClick={downloadFile}
            >
                Download JSON
            </button>
        );
    }
}

export default DownloadButton;
