import React from 'react';

class DownloadButton extends React.Component {

    render() {
        return (
            <button
                className="small ui grey button"
                onClick={() => this.props.onDownloadClick()}
            >
                DOWNLOAD
            </button>
        );
    }
}

export default DownloadButton;
