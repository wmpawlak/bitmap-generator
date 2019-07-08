import React from 'react';
import { resetBoard } from '../actions';
import { connect } from 'react-redux';

class ResetButton extends React.Component {

    render() {
        return (
            <button
                className="small ui grey basic button"
                onClick={this.onResetClick}
            >
                Reset frame
            </button>
        );
    }

    onResetClick = (squares) => {
        this.props.resetBoard(squares);
    }
}



const mapStateToProps = state => ({
    squares: state.colorAssign.squares,
})

const mapDispatchToProps = dispatch => ({
    resetBoard: (squares) => dispatch(resetBoard(squares))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton)