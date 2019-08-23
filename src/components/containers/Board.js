/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Frame from '../presentational/Frame';

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

Board.propTypes = { currentFrame: PropTypes.array };

export default connect(state => ({
  currentFrame: state.reducer.listOfFrames[state.reducer.activeFrameIndex],
  pixelSide: state.reducer.pixelSide
}))(Board);
