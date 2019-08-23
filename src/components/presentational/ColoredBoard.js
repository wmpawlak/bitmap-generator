/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ColorsPalette from '../containers/ColorsPalette';
import Board from '../containers/Board';
import ResetButton from '../buttons/ResetButton';
import Canvas from './Canvas';
import DownloadButton from '../buttons/DownloadButton';
import { mouseUp } from '../../actions';
import MultipleItems from '../containers/Carousel';
import AddBeforeButton from '../buttons/AddBeforeButton';
import AddAfterButton from '../buttons/AddAfterButton';
import AddCopyButton from '../buttons/AddCopyButton';
import SetSize from '../buttons/SetSize';
import ModalSwitch from '../buttons/ModalSwitch';
import Modal from './Modal';

const ColoredBoard = ({ mouseUp }) => {
  return (
    <div>
      <div className="brd" onMouseLeave={mouseUp}>
        <div className="ui raised segment" id="gridOne">
          <Board />
          <SetSize />
        </div>
        <div id="gridTwo">
          <div id="gridThree">
            <ColorsPalette />
          </div>

          <div id="gridFour">
            <div className="grid-container">
              <div className="buttonMainContainer">
                <div className="ui raised segment vertical buttons buttonColumnOne">
                  <DownloadButton />
                  <ResetButton />
                  <ModalSwitch />
                </div>
                <div className="ui raised segment vertical buttons buttonColumnTwo">
                  <AddBeforeButton />
                  <AddAfterButton />
                  <AddCopyButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MultipleItems />
      </div>
      <Canvas />
      <Modal>TEXT</Modal>
    </div>
  );
};

ColoredBoard.propTypes = { mouseUp: PropTypes.func };

export default connect(
  null,
  { mouseUp }
)(ColoredBoard);
