import React from 'react';

class ResetButton extends React.Component {

    render() {
        return (
            <button
                className="small ui grey basic button"
                onClick={() => this.props.onResetClick()}
            >
                Reset frame
            </button>
        );
    }
}

export default ResetButton;