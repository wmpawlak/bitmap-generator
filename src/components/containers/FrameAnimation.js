import React from 'react';
import { connect } from 'react-redux';

import Modal from '../presentational/Modal';

class FrameAnimation extends React.Component {
  intervalID = null;
  playAnimation = () => {
    this.intervalID = setInterval(() => console.log('works'), 200);
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <Modal />;
  }
}

export default connect(null)(FrameAnimation);
