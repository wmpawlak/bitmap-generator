import React from 'react';

class DownloadButton extends React.Component {

    render() {
        return (
            <button
                className="small ui grey basic button"
                //onClick={() => this.setState({ value: 'X' })}
                //onClick={downloadBoard}
                onClick={() => this.props.onDownloadClick()}
            >
                Download JSON
            </button>
        );
    }
}

export default DownloadButton;
