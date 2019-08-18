import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { downloadBoard } from '../../actions';

const DownloadButton = ({ downloadBoard }) => {
  return (
    <button className="small ui grey button" onClick={downloadBoard}>
      DOWNLOAD
    </button>
  );
};

DownloadButton.propTypes = { downloadBoard: PropTypes.func };

export default connect(
  null,
  { downloadBoard }
)(DownloadButton);
