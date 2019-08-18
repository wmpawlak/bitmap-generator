import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  modalSwitch,
  playAnimation,
  pauseAnimation,
  stopAnimation
} from '../../actions';

let interval;

const Modal = ({
  isModalOn,
  modalSwitch,
  background,
  frameIndexAnimation,
  playAnimation,
  pauseAnimation,
  stopAnimation,
  numberOfFrames
}) => {
  //*************************************wrzucić style do odpowiedniego CSS @Mateusz!!!************************//
  const renderAnimation = () => {
    const frame = background[frameIndexAnimation];
    return (
      <div className="board" style={{ width: '400px' }}>
        {frame.map((pixel, i) => (
          <div
            className="frame"
            key={i}
            style={{
              backgroundColor: `rgb(${pixel})`
            }}
          />
        ))}
      </div>
    );
  };

  const playAnimationHandler = () => {
    interval = setInterval(playAnimation, 1000);
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
        <i className="stop icon" onClick={stopAnimationHandler} />
        <i className="play icon" onClick={playAnimationHandler} />
        <i className="pause icon" onClick={pauseAnimationHandler} />
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
  numberOfFrames: PropTypes.number
};

const mapStateToProps = state => ({
  isModalOn: state.reducer.isModalOn,
  background: state.reducer.listOfFrames,
  frameIndexAnimation: state.reducer.frameIndexAnimation,
  numberOfFrames: state.reducer.listOfFrames.length
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
