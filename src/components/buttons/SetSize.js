import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setSize } from '../../redux/actions';

const SetSize = ({ handleChange }) => {
  const removeElement = () => {
    const el = document.getElementById('setSize');
    el.remove();
  };

  const frameSizes = [['4:4', 16], ['8:8', 64], ['16:16', 256]];

  return (
    <div id="setSize">
      <div id="setSizeText">CHOOSE NUMBER OF PIXELS</div>
      <div className="ui buttons" id="setSizeButtons">
        {frameSizes.map(([name, size]) => (
          <button
            key={name}
            className="ui button"
            onClick={() => {
              handleChange(size);
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

SetSize.propTypes = {
  setSize: PropTypes.func,
  handleChange: PropTypes.func
};

const mapDispatchToProps = {
  handleChange: setSize
};

export default connect(
  null,
  mapDispatchToProps
)(SetSize);
