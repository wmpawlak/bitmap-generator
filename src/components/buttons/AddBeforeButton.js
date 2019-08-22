import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addBefore } from '../../actions';

const AddBeforeButton = ({ addBefore }) => {
  return (
    <button className="small ui grey button" onClick={addBefore}>
      add before
    </button>
  );
};

AddBeforeButton.propTypes = { addBefore: PropTypes.func };

export default connect(
  null,
  { addBefore }
)(AddBeforeButton);
