import React from "react";
import { connect } from "react-redux";

import Board from "../containers/Board";
import { modalSwitch } from "../../actions";

const Modal = ({ isModalOn, modalSwitch, listOfFrames }) => {
    console.log(listOfFrames[1]);
    const renderAnimation = listOfFrames => {
        
        return <Board />;
    };

    const turnOffModal = () => {
        modalSwitch();
    };

    return isModalOn ? (
        <div className="modal">
            <div className="container">{renderAnimation}
                <div onClick={turnOffModal}>
                    <i className="close icon"/>
                </div>
            </div>
        </div>
    ) : null;
};

const mapStateToProps = state => ({
    isModalOn: state.reducer.isModalOn,
    listOfFrames: state.reducer.listOfFrames
});

const mapDispatchToProps = {
    modalSwitch: modalSwitch
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
