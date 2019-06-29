import React from 'react';

class ResetButton extends React.Component {

    render() {
        return (
            <button
                className="function-btn"
                onClick={() => this.setState({ value: 'X' })}
            >
                Reset frame
            </button>
        );
    }
}

export default ResetButton;