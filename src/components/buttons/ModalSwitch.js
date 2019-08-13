import React from 'react';
import { connect } from 'react-redux';

import { modalSwitch } from '../../actions';

const ModalSwitch = ({ modalSwitch }) => {
  return (
    <button className="small ui grey button" onClick={modalSwitch}>
      Show Animation
    </button>
  );
};

export default connect(
  null,
  { modalSwitch }
)(ModalSwitch);
