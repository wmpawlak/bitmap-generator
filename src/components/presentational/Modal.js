import React from "react";
import { connect } from "react-redux";

import { modalSwitch, playAnimation } from "../../actions";

const Modal = ({
    isModalOn,
    modalSwitch,
    background,
    frameIndexAnimation,
    playAnimation,
    listOfFrames
}) => {

    //*************************************wrzucić style do odpowiedniego CSS @Mateusz!!!************************//
    const renderAnimation = () => {
        return (
            <div className="board" style={{ width: "400px" }}>
                {Array.from({ length: 64 }).map((s, i) => (
                    <div
                        className="frame"
                        key={i}
                        style={{ backgroundColor: `rgb(${background[frameIndexAnimation][i]})` }}
                    />
                ))}
            </div>
        );
    };

    const playAnimationHandler = () => {
        const interval = setInterval(playAnimation, 500);
        frameIndexAnimation === listOfFrames ? clearInterval(interval) : clearInterval()
        
    };

    return isModalOn ? (
        <div className="modal">
            <div className="container">
                <i className="close icon" onClick={modalSwitch} />
                {renderAnimation()}
                <i className="stop icon" />
                <i className="play icon" onClick={playAnimationHandler} />
                <i className="pause icon" />
            </div>
        </div>
    ) : null;
};

const mapStateToProps = state => ({
    isModalOn: state.reducer.isModalOn,
    background: state.reducer.listOfFrames,
    frameIndexAnimation: state.reducer.frameIndexAnimation,
    listOfFrames: state.reducer.listOfFrames
});

const mapDispatchToProps = {
    modalSwitch: modalSwitch,
    playAnimation: playAnimation
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
