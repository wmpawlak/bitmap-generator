import React from 'react';
import { connect } from 'react-redux';

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
import ChangeSize from '../buttons/ChangeSize';
import ModalSwitch from '../buttons/ModalSwitch';
import Modal from './Modal';

const ColoredBoard = ({ mouseUp }) => {
  return (
    <div>
      <div className="brd" onMouseLeave={mouseUp}>
        <div className="ui raised segment" id="gridOne">
          <Board />
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
      <ChangeSize />
      <Modal>TEXT</Modal>
    </div>
  );
};

export default connect(
  null,
  { mouseUp }
)(ColoredBoard);
