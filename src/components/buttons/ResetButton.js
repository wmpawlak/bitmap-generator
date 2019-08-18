import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetBoard } from '../../actions';

const ResetButton = ({ resetBoard }) => {
  return (
    <button className="small ui grey button" onClick={resetBoard}>
      RESET FRAME
    </button>
  );
};

ResetButton.propTypes = { resetBoard: PropTypes.func };

export default connect(
  null,
  { resetBoard }
)(ResetButton);
