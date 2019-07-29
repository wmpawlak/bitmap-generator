import React from "react";
//import ReactDOM from 'react-dom';

const Frame = ({
    index,
    mouseDown,
    isMouseDown,
    assignColor,
    mouseUp,
    background,
    b
}) => {
    const handleMove = () => {
        if (isMouseDown) {
            assignColor(index);
        }
    };

    const handleMouseDown = () => {
        assignColor(index);
        mouseDown();
    };

    const handleUp = () => {
        mouseUp();
    };

    return (
        <div
            className="frame"
            style={{
                backgroundColor: `rgb(
                    ${background[0]}, 
                    ${background[1]}, 
                    ${background[2]}
                )`
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleUp}
            onMouseEnter={handleMove}
        />
    );
};

export default Frame;
