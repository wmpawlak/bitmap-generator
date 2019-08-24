import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Frame from './Frame';

const Board = ({ pixelSide, currentFrame }) => {
  const renderFrame = i => {
    return <Frame index={i} />;
  };
  return (
    <div className="board">
      {currentFrame.map((s, i) => (
        <div
          style={{
            width: pixelSide,
            height: pixelSide,
            float: 'left'
          }}
          key={i}
        >
          {renderFrame(i)}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  currentFrame: PropTypes.array,
  pixelSide: PropTypes.string
};

export default connect(state => ({
  currentFrame: state.listOfFrames[state.activeFrameIndex],
  pixelSide: state.pixelSide
}))(Board);
