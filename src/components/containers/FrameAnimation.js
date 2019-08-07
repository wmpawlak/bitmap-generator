import React from "react";
import { connect } from "react-redux";

//import Board from "../presentational/Board";
import Modal from '../presentational/Modal';

class FrameAnimation extends React.Component {
    intervalID = null;
    playAnimation = () => {
        this.intervalID = setInterval(() => console.log("works"), 200);
    };

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <Modal></Modal>
        );
    };
}

export default connect(
    null,
)
    (FrameAnimation);