import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteFrame } from '../../actions';

const DeleteButton = ({ deleteFrame, index }) => {
  const handleClick = e => {
    deleteFrame(index);
    e.stopPropagation();
  };
  return <i id="delButton" className="close icon" onClick={handleClick}></i>;
};

DeleteButton.propTypes = {
  deleteFrame: PropTypes.func,
  index: PropTypes.number
};

export default connect(
  null,
  { deleteFrame }
)(DeleteButton);
