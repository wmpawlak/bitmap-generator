import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Pixel from './Pixel';

const Board = ({ pixelSide, currentFrame }) => {
  const renderPixel = i => {
    return <Pixel index={i} />;
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
          {renderPixel(i)}
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
