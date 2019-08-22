/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeSize } from '../../actions';

const ChangeSize = ({ handleChange }) => {
  const removeElement = () => {
    const el = document.getElementById('changeSize');
    el.remove();
  };

  const sizes = [['4:4', 16], ['8:8', 64], ['12:12', 144]];

  return (
    <div id="changeSize">
      <div id="changeSizeText">CHOOSE NUMBER OF PIXELS</div>
      <div className="ui buttons" id="changeSizeButtons">
        {sizes.map(([name, size]) => (
          <button
            key={name}
            className="ui button"
            onClick={() => {
              {
                handleChange(size);
              }
              removeElement();
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div id="cover"></div>
    </div>
  );
};

ChangeSize.propTypes = {
  changeSize: PropTypes.func
};

const mapDispatchToProps = {
  handleChange: changeSize
};

export default connect(
  null,
  mapDispatchToProps
)(ChangeSize);
