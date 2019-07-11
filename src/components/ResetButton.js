import React from 'react';

class ResetButton extends React.Component {

    render() {
        return (
            <button
                className="small ui grey button"
                onClick={() => this.props.onResetClick()}
            >
                RESET FRAME
            </button>
        );
    }
}

export default ResetButton;