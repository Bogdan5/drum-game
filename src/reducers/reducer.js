// import { combineReducers } from 'redux';
import { DRUM_CLICKED, SLIDER_MOVED, START, BANK_CHANGED } from '../actions/types.js';
// import { drumBeat, sliderMove, startGame, bankChange } from '../actions/actionCreators.js';

const initialState = {
  drumClicked: null,
  slider: 0,
  position: 0.5,
  gameStarted: true,
  bank: true,
};

const drumReducer = (state=initialState, action) => {
  switch (action.type) {
    case DRUM_CLICKED:
      return Object.assign({}, state, { drumClicked: action.drumClicked });
    case SLIDER_MOVED:
      return Object.assign({}, state, { position: action.position });
    case START:
      console.log('reducer start', action.gameStarted);
      return Object.assign({}, state, { gameStarted: !action.gameStarted });
    case BANK_CHANGED:
      console.log('reducer bankk', action.bank);
      return Object.assign({}, state, { bank: !action.bank });
    default:
      return state;
  }
};

export default drumReducer;
