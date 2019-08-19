import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCopy } from '../../actions';

const AddCopyButton = ({ addCopy }) => {
  return (
    <button className="small ui grey button" onClick={addCopy}>
      COPY FRAME
    </button>
  );
};

AddCopyButton.propTypes = { addCopy: PropTypes.func };

export default connect(
  null,
  { addCopy }
)(AddCopyButton);
