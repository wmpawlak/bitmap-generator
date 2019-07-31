import React from "react";

const Frame = ({
    index,
    mouseDown,
    isMouseDown,
    assignColor,
    mouseUp,
    background,
    color
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

    const handleMouseOver = event => {
        if (!isMouseDown) {
            const el = event.target;
            let showColor = `rgb(${color[0]},${color[1]},${color[2]})`;
            el.style.backgroundColor = `radialGradient(${showColor}, transparent)`;
            console.log(el.style.backgroundColor);
        }
    };

    const handleMouseLeave = event => {
        const el = event.target;
        let originalColor = `rgb(${background[0]}, ${background[1]}, ${background[2]})`
        el.style.backgroundColor = originalColor;
    };



    return (
        <div
            className="frame"
            style={{
                backgroundColor: `rgb( ${background[0]}, ${background[1]}, ${background[2]})`
            }}
            onMouseOver={event => handleMouseOver(event)}
            onMouseDown={handleMouseDown}
            onMouseUp={handleUp}
            onMouseEnter={handleMove}
            onMouseLeave={event => handleMouseLeave(event)}
        />
    );
};

export default Frame;


// radial-gradient(#e66465, transparent);

// radial-gradient(rgb(233,233,233), transparent);


// `radial-gradient(rgb(${color[0]},${color[1]},${color[2]}), transparent)`

