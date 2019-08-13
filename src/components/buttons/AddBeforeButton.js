import React from 'react';
import { connect } from 'react-redux';

import { addBefore } from '../../actions';

const AddBeforeButton = ({ addBefore }) => {
  return (
    <button className="small ui grey button" onClick={addBefore}>
      ADD BEFORE
    </button>
  );
};

export default connect(
  null,
  { addBefore }
)(AddBeforeButton);
