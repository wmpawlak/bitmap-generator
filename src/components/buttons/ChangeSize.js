/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { changeSize16, changeSize64, changeSize144 } from '../../actions';

const ChangeSize = ({ changeSize16, changeSize64, changeSize144 }) => {
  const removeElement = () => {
    const el = document.getElementById('changeSize');
    el.remove();
  };

  return (
    <div id="changeSize">
      <div id="changeSizeText">CHOOSE NUMBER OF PIXELS</div>
      <div className="ui buttons" id="changeSizeButtons">
        <button
          className="ui button"
          onClick={() => {
            changeSize16();
            removeElement();
          }}
        >
          4:4
        </button>
        <button
          className="ui button"
          onClick={() => {
            changeSize64();
            removeElement();
          }}
        >
          8:8
        </button>
        <button
          className="ui button"
          onClick={() => {
            changeSize144();
            removeElement();
          }}
        >
          12:12
        </button>
      </div>
      <div id="cover"></div>
    </div>
  );
};

export default connect(
  null,
  { changeSize16, changeSize64, changeSize144 }
)(ChangeSize);
