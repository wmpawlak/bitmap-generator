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
            let showColor = `radial-gradient(rgb(${color[0]},${color[1]},${color[2]}), rgb( ${background[0]}, ${background[1]}, ${background[2]}))`
            el.classList.add("radial-gradient");
            el.style.background = showColor;
        }
    };

    const handleMouseLeave = event => {
        const el = event.target;
        let originalColor = `rgb(${background[0]}, ${background[1]}, ${background[2]})`
        el.style.background = originalColor;
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

