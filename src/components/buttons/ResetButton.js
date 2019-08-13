import React from 'react';
import { connect } from 'react-redux';

import { resetBoard } from '../../actions';

const ResetButton = ({ resetBoard }) => {
  return (
    <button className="small ui grey button" onClick={resetBoard}>
      RESET FRAME
    </button>
  );
};

export default connect(
  null,
  { resetBoard }
)(ResetButton);
