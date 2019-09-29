import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ColorsPalette from '../ColorsPalette/ColorsPalette';
import Board from '../Board';
import Canvas from '../Canvas';
import Carousel from '../Carousel/Carousel';
import FrameAnimationModal from '../FrameAnimationModal';
import SetSize from '../buttons/SetSize';
import ReusableButton from '../buttons/ReusableButton';
import {
  mouseUp,
  addAfter,
  addBefore,
  addCopy,
  downloadBoard,
  modalSwitch,
  resetBoard
} from '../../redux/actions';

const Container = ({
  mouseUp,
  addAfter,
  addBefore,
  addCopy,
  downloadBoard,
  modalSwitch,
  resetBoard
}) => {
  return (
    <div className="container">
      <div className="background"></div>
      <div className="appContainer">
        <div className="appInnerContainer">
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
                        <ReusableButton
                          name={'download'}
                          onClick={downloadBoard}
                        />
                        <ReusableButton
                          name={'reset frame'}
                          onClick={resetBoard}
                        />
                        <ReusableButton
                          name={'show animation'}
                          onClick={modalSwitch}
                        />
                      </div>
                      <div className="ui raised segment vertical buttons buttonColumnTwo">
                        <ReusableButton name={'add after'} onClick={addAfter} />
                        <ReusableButton
                          name={'add before'}
                          onClick={addBefore}
                        />
                        <ReusableButton name={'copy frame'} onClick={addCopy} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carouselWrapper">
              <Carousel />
            </div>
            <Canvas />
            <FrameAnimationModal>TEXT</FrameAnimationModal>
          </div>
        </div>
      </div>
      <div className="background2"></div>
    </div>
  );
};

Container.propTypes = {
  mouseUp: PropTypes.func,
  addAfter: PropTypes.func,
  addBefore: PropTypes.func,
  addCopy: PropTypes.func,
  downloadBoard: PropTypes.func,
  modalSwitch: PropTypes.func,
  resetBoard: PropTypes.func
};

const mapDispatchToProps = {
  mouseUp: mouseUp,
  addAfter: addAfter,
  addBefore: addBefore,
  addCopy: addCopy,
  downloadBoard: downloadBoard,
  modalSwitch: modalSwitch,
  resetBoard: resetBoard
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
