import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { DeleteButton } from './buttons';
import { chooseFrame } from '../redux/actions';

const PreviewFrame = ({
  index,
  chooseFrame,
  canvas,
  activeFrameIndex,
  activeFrameData,
  numberOfFrames,
  numberOfPixels
}) => {
  const handleClick = () => {
    chooseFrame(index);
  };

  let background;

  let size;

  if (canvas) {
    const context = canvas.getContext('2d');

    const pixels = Uint8ClampedArray.from(
      activeFrameData.map(p => [...p, 100]).flat()
    );

    size = Math.sqrt(numberOfPixels);

    const imgData = new ImageData(pixels, size);

    const scale = window.devicePixelRatio;
    canvas.width = size * 1;
    canvas.height = size * 1;

    context.scale(scale, scale);

    context.imageSmoothingEnabled = false;

    context.putImageData(imgData, 0, 0);

    background = canvas.toDataURL();
  }

  return (
    <div
      className="previewFrameBorder"
      style={{
        boxShadow:
          activeFrameIndex === index
            ? '0px 0px 2px 5px white'
            : '0px 0px 1px rgb(140, 140, 140)'
      }}
    >
      <div
        className="preview-frame"
        onClick={handleClick}
        style={{
          width: size,
          height: size,
          transform: 'scale(12)',
          background: 'url(' + background + ')'
        }}
      >
        {numberOfFrames > 1 && <DeleteButton index={index} />}
      </div>
    </div>
  );
};

PreviewFrame.propTypes = {
  index: PropTypes.number,
  chooseFrame: PropTypes.func,
  canvas: PropTypes.object,
  activeFrameIndex: PropTypes.number,
  activeFrameData: PropTypes.array,
  numberOfFrames: PropTypes.number,
  numberOfPixels: PropTypes.number
};

const mapStateToProps = state => ({
  activeFrameIndex: state.activeFrameIndex,
  numberOfFrames: state.listOfFrames.length,
  numberOfPixels: state.numberOfPixels
});

const mapDispatchToProps = {
  chooseFrame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewFrame);
