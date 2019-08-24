import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { downloadBoard } from '../../redux/actions';

const DownloadButton = ({ downloadBoard }) => {
  return (
    <button className="small ui grey button" onClick={downloadBoard}>
      download
    </button>
  );
};

DownloadButton.propTypes = { downloadBoard: PropTypes.func };

export default connect(
  null,
  { downloadBoard }
)(DownloadButton);
