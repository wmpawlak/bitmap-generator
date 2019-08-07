import React from "react";
import { connect } from "react-redux";

import { modalSwitch, playAnimation, pauseAnimation, stopAnimation } from "../../actions";

const Modal = ({
    isModalOn,
    modalSwitch,
    background,
    frameIndexAnimation,
    playAnimation,
    pauseAnimation,
    stopAnimation,
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
                        style={{
                            backgroundColor: `rgb(${
                                background[frameIndexAnimation][i]
                            })`
                        }}
                    />
                ))}
            </div>
        );
    };

    //jak zrobić, żeby przestało wywoływać w kółko playAnimation - jak zatrzymać setInterval?**********************************//
    
    const playAnimationHandler = () => {
        let interval = setInterval(playAnimation, 300);
        console.log(frameIndexAnimation);
        console.log(listOfFrames);
        // if (frameIndexAnimation === listOfFrames) {
        //     clearInterval(interval);
        //     console.log(frameIndexAnimation);
        // }
    };

    const stopAnimationHandler = () => {
        stopAnimation();
    };

    const pauseAnimationHandler = () => {
        pauseAnimation();
    };

    return isModalOn ? (
        <div className="modal">
            <div className="container">
                <i className="close icon" onClick={modalSwitch} />
                {renderAnimation()}
                <i className="stop icon" onClick={stopAnimationHandler} />
                <i className="play icon" onClick={playAnimationHandler} />
                <i className="pause icon" onClick={pauseAnimationHandler} />
            </div>
        </div>
    ) : null;
};

const mapStateToProps = state => ({
    isModalOn: state.reducer.isModalOn,
    background: state.reducer.listOfFrames,
    frameIndexAnimation: state.reducer.frameIndexAnimation,
    listOfFrames: state.reducer.listOfFrames.length
});

const mapDispatchToProps = {
    modalSwitch: modalSwitch,
    playAnimation: playAnimation,
    pauseAnimation: pauseAnimation,
    stopAnimation: stopAnimation
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
