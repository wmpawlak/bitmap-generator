import React from 'react';
import { connect } from 'react-redux';
import { mouseDown, mouseUp, assignColor } from '../redux/actions';
import PropTypes from 'prop-types';

const Pixel = ({
  index,
  mouseDown,
  isMouseDown,
  assignColor,
  mouseUp,
  background,
  color
}) => {
  const handleMove = () => {
    if (isMouseDown) {
      assignColor(index);
    }
  };

  const handleMouseDown = () => {
    assignColor(index);
    mouseDown();
  };

  const handleUp = () => {
    mouseUp();
  };

  const handleMouseOver = event => {
    if (!isMouseDown) {
      const el = event.target;
      let showColor = `radial-gradient(rgb(${color[0]},${color[1]},${
        color[2]
      }), rgb( ${background[0]}, ${background[1]}, ${background[2]}))`;
      el.classList.add('radial-gradient');
      el.style.background = showColor;
    }
  };

  const handleMouseLeave = event => {
    const el = event.target;
    let originalColor = `rgb(${background[0]}, ${background[1]}, ${
      background[2]
    })`;
    el.style.background = originalColor;
  };

  return (
    <div
      className="pixel"
      style={{
        backgroundColor: `rgb( ${background[0]}, ${background[1]}, ${
          background[2]
        })`
      }}
      onMouseOver={event => handleMouseOver(event)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleUp}
      onMouseEnter={handleMove}
      onMouseLeave={event => handleMouseLeave(event)}
    />
  );
};

Pixel.propTypes = {
  index: PropTypes.number,
  mouseDown: PropTypes.func,
  isMouseDown: PropTypes.bool,
  assignColor: PropTypes.func,
  mouseUp: PropTypes.func,
  background: PropTypes.array,
  color: PropTypes.array
};

const mapStateToProps = (state, ownProps) => ({
  background: state.listOfFrames[state.activeFrameIndex][ownProps.index],
  isMouseDown: state.isMouseDown,
  color: state.color,
  numberOfPixels: state.numberOfPixels
});

const mapDispatchToProps = {
  mouseDown,
  mouseUp,
  assignColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pixel);
