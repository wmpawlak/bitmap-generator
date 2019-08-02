import React from "react";
import { connect } from "react-redux";

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

// const mapStateToProps = () => ({
//     isModalOn
// });

export default connect(
    null,
    // mapStateToProps
)(Modal);
