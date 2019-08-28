import React from 'react';
import PropTypes from 'prop-types';

class ReusableButton extends React.Component {
  render() {
    return (
      <button className="small ui grey button" onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

ReusableButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};

export default ReusableButton;
