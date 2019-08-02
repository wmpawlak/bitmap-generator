import React from "react";

import Board from "../containers/Board";

class Modal extends React.Component {
    renderAnimation = () => {
        return <Board />;
    };

    render() {
        return (
            <div className="modal">
                <div className="container">
                    {/* {setInterval(this.renderAnimation(), 200)} */}
                </div>
            </div>
        );
    }
}

export default Modal;
