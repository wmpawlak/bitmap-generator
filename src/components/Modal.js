import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  modalSwitch,
  playAnimation,
  pauseAnimation,
  stopAnimation,
  editFrame,
  editAnimationSpeed
} from '../redux/actions';

let interval;

const Modal = ({
  isModalOn,
  modalSwitch,
  background,
  frameIndexAnimation,
  playAnimation,
  pauseAnimation,
  stopAnimation,
  numberOfFrames,
  pixelSide,
  editFrame,
  animationInterval,
  editAnimationSpeed
}) => {
  const renderAnimation = () => {
    const frame = background[frameIndexAnimation];
    return (
      <div className="modalBoard">
        {frame.map((pixel, i) => (
          <div
            className="pixel"
            key={i}
            style={{
              width: pixelSide,
              height: pixelSide,
              backgroundColor: `rgb(${pixel})`
            }}
          />
        ))}
      </div>
    );
  };

  const playAnimationHandler = () => {
    if (frameIndexAnimation !== numberOfFrames - 1) {
      interval = setInterval(playAnimation, animationInterval);
    }
  };

  if (interval) {
    if (frameIndexAnimation === numberOfFrames - 1) {
      clearInterval(interval);
    }
  }

  const pauseAnimationHandler = () => {
    clearInterval(interval);
    pauseAnimation();
  };

  const stopAnimationHandler = () => {
    clearInterval(interval);
    stopAnimation();
  };

  return isModalOn ? (
    <div className="modal">
      <div className="container">
        <i className="close icon" onClick={modalSwitch} />
        {renderAnimation()}
        <button
          className="ui labeled icon button"
          onClick={playAnimationHandler}
        >
          <i className="play icon" />
          play
        </button>
        <button
          className="ui labeled icon button"
          onClick={stopAnimationHandler}
        >
          <i className="stop icon" />
          stop
        </button>
        <button
          className="ui labeled icon button"
          onClick={pauseAnimationHandler}
        >
          <i className="pause icon" />
          pause
        </button>
        <button className="ui labeled icon button" onClick={editFrame}>
          <i className="edit icon" />
          edit
        </button>
      </div>
      <div className="ui right labeled input">
        <input
          type="text"
          onClick={editAnimationSpeed(interval)}
          placeholder="Enter interval..."
        />
        <div className="ui basic label">ms</div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  isModalOn: PropTypes.bool,
  modalSwitch: PropTypes.func,
  background: PropTypes.array,
  frameIndexAnimation: PropTypes.number,
  playAnimation: PropTypes.func,
  pauseAnimation: PropTypes.func,
  stopAnimation: PropTypes.func,
  editFrame: PropTypes.func,
  numberOfFrames: PropTypes.number,
  pixelSide: PropTypes.string,
  animationInterval: PropTypes.number,
  editAnimationSpeed: PropTypes.func
};

const mapStateToProps = state => ({
  isModalOn: state.isModalOn,
  background: state.listOfFrames,
  frameIndexAnimation: state.frameIndexAnimation,
  numberOfFrames: state.listOfFrames.length,
  pixelSide: state.pixelSide,
  animationInterval: state.animationInterval
});

const mapDispatchToProps = {
  modalSwitch: modalSwitch,
  playAnimation: playAnimation,
  pauseAnimation: pauseAnimation,
  stopAnimation: stopAnimation,
  editFrame: editFrame,
  editAnimationSpeed: editAnimationSpeed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
