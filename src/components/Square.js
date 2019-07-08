import React from 'react';
//import ReactDOM from 'react-dom';

const square = (props) => {

        return (
            <button
                className="square"
                style={{
                    backgroundColor: `rgb(${props.color[0]}, ${props.color[1]}, ${props.color[2]})`
                }}
                onClick={props.onClick}
            />
        );
}

export default square;