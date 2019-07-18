import React from "react";
//import ReactDOM from 'react-dom';

const Square = ({
    onClick,
    onMouseDown,
    onMouseUp,
    background,
    isMouseDown
}) => {
    const handleDown = () => {
        onClick();
        onMouseDown();
    };

    const handleUp = () => {
        onMouseUp();
    };

    const handleMove = () => {
        if (isMouseDown) {
            console.log("true");
            onClick();
        }
    };

    return (
        <button
            className="square"
            style={{
                backgroundColor: `rgb(
                    ${background[0]}, 
                ${background[1]}, 
                ${background[2]})`
            }}
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            onMouseEnter={handleMove}
        />
    );
};

export default Square;

//zapisać do reduxa w stanie że został kliknięty przycisk mousedown, podłączyć wydarzenie do reduxa
