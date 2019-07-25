import React from "react";
//import ReactDOM from 'react-dom';

const Frame = props => {
    return (
        <div
            className="frame"
            onClick={() => {
                console.log("click");
            }}
        />
    );
};

export default Frame;
