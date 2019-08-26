import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ColorsPalette from '../components/ColorsPalette/ColorsPalette';
import Board from '../components/Board';
import Canvas from '../components/Canvas';
import { mouseUp } from '../redux/actions';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import {
  AddAfterButton,
  AddBeforeButton,
  AddCopyButton,
  DownloadButton,
  ModalSwitch,
  ResetButton,
  SetSize
} from '../components/buttons';

const Container = ({ mouseUp }) => {
  return (
    <div>
      <div className="header">
        <div className="innerHeader">PIXEL ART</div>
      </div>
      <div>
        <div className="brd">
          <div
            className="ui raised segment"
            id="gridOne"
            onMouseLeave={mouseUp}
          >
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
          <Carousel />
        </div>
        <Canvas />
        <Modal>TEXT</Modal>
      </div>
    </div>
  );
};

Container.propTypes = { mouseUp: PropTypes.func };

export default connect(
  null,
  { mouseUp }
)(Container);
