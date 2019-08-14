/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { changeSize16, changeSize64, changeSize144 } from '../../actions';

const ChangeSize = ({ changeSize16, changeSize64, changeSize144 }) => {
  return (
    <div className="ui buttons">
      <button className="ui button" onClick={changeSize16}>
        4:4
      </button>
      <button className="ui button" onClick={changeSize64}>
        8:8
      </button>
      <button className="ui button" onClick={changeSize144}>
        12:12
      </button>
    </div>
  );
};

export default connect(
  null,
  { changeSize16, changeSize64, changeSize144 }
)(ChangeSize);
