import React from 'react';
//import ReactDOM from 'react-dom';

class square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMouseDown: false };
    }

    handleDown = () => {
        this.setState(state => ({
            isMouseDown: true
        }));
        console.log("mouse is down");
        return true;
    };

    handleUp = () => {
        this.setState(state => ({
            isMouseDown: false
        }));
        console.log("mouse is up");
        return true;
    };

    handleMove = () => {
        if (this.state.isMouseDown === true) {
            console.log('true');
            this.props.onClick();
        }
    }

    render() {
        return (
            <button
                className="square"
                style={{
                    backgroundColor: `rgb(${this.props.color[0]}, ${this.props.color[1]}, ${this.props.color[2]})`
                }}
                //onClick={this.props.onClick}
                onMouseDown={this.handleDown}
                onMouseUp={this.handleUp}
                onMouseEnter={this.handleMove}
                
            />
        );
    }
}

export default square;