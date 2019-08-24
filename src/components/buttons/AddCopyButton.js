import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCopy } from '../../redux/actions';

const AddCopyButton = ({ addCopy }) => {
  return (
    <button className="small ui grey button" onClick={addCopy}>
      copy frame
    </button>
  );
};

AddCopyButton.propTypes = { addCopy: PropTypes.func };

export default connect(
  null,
  { addCopy }
)(AddCopyButton);
