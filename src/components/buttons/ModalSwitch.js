import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { modalSwitch } from '../../actions';

const ModalSwitch = ({ modalSwitch }) => {
  return (
    <button className="small ui grey button" onClick={modalSwitch}>
      show animation
    </button>
  );
};

ModalSwitch.propTypes = { modalSwitch: PropTypes.func };

export default connect(
  null,
  { modalSwitch }
)(ModalSwitch);
