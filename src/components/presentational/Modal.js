import React from "react";

const Modal = props => {


    return (
        props.hide ?
            null :
            <div className="modal" >
                <div className="container">
                    {props.children}
                </div>
            </div>
    );
}

export default Modal;