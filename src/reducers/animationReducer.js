import { defaultState } from './index';
import {
  PLAY_ANIMATION,
  PAUSE_ANIMATION,
  STOP_ANIMATION,
  EDIT_FRAME
} from '../actions/actionTypes';

const animationReducer = (state = defaultState, action) => {
  if (action.type === PLAY_ANIMATION) {
    const newframeIndexAnimation = state.frameIndexAnimation;
    return { ...state, frameIndexAnimation: newframeIndexAnimation + 1 };
  } else if (action.type === STOP_ANIMATION) {
    return { ...state, frameIndexAnimation: 0 };
  } else if (action.type === PAUSE_ANIMATION) {
    const newframeIndexAnimation = state.frameIndexAnimation;
    return { ...state, frameIndexAnimation: newframeIndexAnimation };
  } else if (action.type === EDIT_FRAME) {
    return {
      ...state,
      activeFrameIndex: state.frameIndexAnimation,
      isModalOn: false
    };
  } else {
    return state;
  }
};

export default animationReducer;
