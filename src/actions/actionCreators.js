import { DRUM_CLICKED, SLIDER_MOVED, START, BANK_CHANGED } from './types.js';

export const drumBeat = (id) => ({ type: DRUM_CLICKED, drumClicked: id, });

export const sliderMove = (position) => ({ type: SLIDER_MOVED, position: position, });

export const startGame = (started) => ({ type: START, gameStarted: started });

export const bankChange = (bank) => ({ type: BANK_CHANGED, bank: bank });
