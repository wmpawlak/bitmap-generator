import React from "react";
import { connect } from "react-redux";

import Board from "../containers/Board";
import { modalSwitch } from "../../actions";

const Modal = ({ isModalOn, modalSwitch }) => {
    const renderAnimation = () => {
        return <Board />;
    };

    const turnOffModal = () => {
        modalSwitch();
    };

    return isModalOn ? (
        <div className="modal">
            <div className="container">{renderAnimation}</div>
            <div className="close-icon" onClick={turnOffModal}>
                X
            </div>
        </div>
    ) : null;
};

const mapStateToProps = state => ({
    isModalOn: state.reducer.isModalOn
});

const mapDispatchToProps = {
    modalSwitch: modalSwitch
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
