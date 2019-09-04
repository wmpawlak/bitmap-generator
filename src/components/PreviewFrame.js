import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DeleteButton from './buttons/DeleteButton';
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
      activeFrameData.map(p => [...p, 255]).flat()
    );

    size = Math.sqrt(numberOfPixels);

    const imgData = new ImageData(pixels, size);

    canvas.width = size;
    canvas.height = size;

    context.putImageData(imgData, 0, 0);

    background = canvas.toDataURL();
  }

  return (
    <div
      className="previewFrameWrapper"
      style={{
        boxShadow:
          activeFrameIndex === index
            ? '0px 0px 2px 5px white'
            : '0px 0px 5px 1px black'
      }}
    >
      <div className="previewFrameBorder">
        <div
          className="preview-frame"
          onClick={handleClick}
          style={{
            background: 'url(' + background + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></div>
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
