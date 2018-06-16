import { combineReducers } from 'redux';
import { DRUM_CLICKED, SLIDER_MOVED, START } from '../actions/types.js';
import { drumBeat, sliderMove } from '../actions/types.js';

const initialState = {
  drumClicked: '',
  slider1: 0,
  slider2: 0,
};

const drumReducer = (state=initialState, action) => {
  switch (action.type) {
    case DRUM_CLICKED:
      return Object.assign({}, state, { drumClicked: action.nameButton });
    case SLIDER_MOVED:
      return Object.assign({}, state, { position: action.position });
    case START:
      return Object.assign({}, state, { gameStarted: !action.gameStarted });
    default:
      return state;
  }
};
