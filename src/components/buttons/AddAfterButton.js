import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addAfter } from '../../actions';

const AddAfterButton = ({ addAfter }) => {
  return (
    <button className="small ui grey button" onClick={addAfter}>
      ADD AFTER
    </button>
  );
};

AddAfterButton.propTypes = { addAfter: PropTypes.func };

export default connect(
  null,
  { addAfter }
)(AddAfterButton);
