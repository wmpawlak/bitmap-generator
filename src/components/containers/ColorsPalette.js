/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Sketch from '../presentational/Sketch';
import PropTypes from 'prop-types';

import { chooseColor } from '../../actions';

const colorsPalette = ({ color, onChange }) => {
  const rgb = { r: color[0], g: color[1], b: color[2] };

  return <Sketch color={rgb} onChangeComplete={onChange} />;
};

colorsPalette.propTypes = {
  color: PropTypes.array,
  onChange: PropTypes.func
};

const mapStateToProps = state => ({
  color: state.reducer.color
});

const mapDispatchToProps = {
  onChange: chooseColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(colorsPalette);
