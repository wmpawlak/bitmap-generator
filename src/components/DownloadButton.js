import React from 'react';

class DownloadButton extends React.Component {

    render() {
        return (
            <button
                className="function-btn"
                onClick={() => this.setState({ value: 'X' })}
            >
                Download JSON
            </button>
        );
    }
}

export default DownloadButton;