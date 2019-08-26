import React from 'react';
import { connect } from 'react-redux';
import Sketch from '../Sketch';
import PropTypes from 'prop-types';

import { chooseColor } from '../../redux/actions';

const ColorsPalette = ({ color, onChange }) => {
  const rgb = { r: color[0], g: color[1], b: color[2] };

  return <Sketch color={rgb} onChangeComplete={onChange} />;
};

ColorsPalette.propTypes = {
  color: PropTypes.array,
  onChange: PropTypes.func
};

const mapStateToProps = state => ({
  color: state.color
});

const mapDispatchToProps = {
  onChange: chooseColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorsPalette);
