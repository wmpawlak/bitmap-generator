import React from 'react';
import ColorsPalette from './ColorsPalette';
import Board from './Board';
import { connect } from 'react-redux';
import { colorAssigned } from '../actions';


class ColorBoard extends React.Component {
    state = {
        color: undefined
    }

    render() {
        return (
            <div className="brd" >
                <div className="ui raised segment">
                    <Board
                        squares={this.props.squares}
                        onSquareClick={this.onSquareClick}
                    />
                </div>
                <div className="ui basic segment">
                    <ColorsPalette
                        color={this.state.color}
                        onChange={(color) => this.setState({ color })}
                    />
                </div>
            </div>
        );
    }

    onSquareClick = (index) => {
        if (this.state.color !== undefined) {
            const newColor = [
                this.state.color.rgb.r,
                this.state.color.rgb.g,
                this.state.color.rgb.b
            ]
            this.props.colorAssigned(index, newColor)
        }

    }
}


const mapStateToProps = state => ({
    squares: state.colorAssign.squares,
})

const mapDispatchToProps = dispatch => ({
    colorAssigned: (index, color) => dispatch(colorAssigned(index, color))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorBoard)