import React from "react";
import { connect } from "react-redux";

import { modalSwitch } from "../../actions";

const Modal = ({ isModalOn, modalSwitch, background }) => {
    //*************************************wrzucić style do odpowiedniego CSS @Mateusz!!!************************//
    const renderAnimation = () => {
        return (
            <div className="board" style={{ width: "400px" }}>
                {
                    Array.from({ length: 64 }).map((s, i) => (<div className="frame" key={i} style={{ backgroundColor: `rgb(${background[0][i]})` }}></div>))
                }
            </div>
        );
    };

    const turnOffModal = () => {
        modalSwitch();
    };

    return isModalOn ? (
        <div className="modal">
            <div className="container">
                <div onClick={turnOffModal}>
                    <i className="close icon" />
                    {renderAnimation()}
                </div>
            </div>
        </div>
    ) : null;
};

const mapStateToProps = state => ({
    isModalOn: state.reducer.isModalOn,
    background: state.reducer.listOfFrames
});

const mapDispatchToProps = {
    modalSwitch: modalSwitch
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
