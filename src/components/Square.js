import React from "react";
//import ReactDOM from 'react-dom';

const Square = ({
    mouseDown,
    isMouseDown,
    assignColor,
    mouseUp,
    background
}) => {
    const handleMove = () => {
        if (isMouseDown) {
            assignColor();
        }
    };

    const handleMouseDown = () => {
        assignColor();
        mouseDown();
    };

    const handleUp = () => {
        mouseUp();
    };

    return (
        <button
            className="square"
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

export default Square;

//zapisać do reduxa w stanie że został kliknięty przycisk mousedown, podłączyć wydarzenie do reduxa
