import { DRUM_CLICKED, SLIDER_MOVED, START, BANK_CHANGED } from '../actions/types.js';

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
      return Object.assign({}, state, { gameStarted: !action.gameStarted });
    case BANK_CHANGED:
      return Object.assign({}, state, { bank: !action.bank });
    default:
      return state;
  }
};

export default drumReducer;
