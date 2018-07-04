import { DRUM_CLICKED, SLIDER_MOVED, START, BANK_CHANGED } from './types.js';

//sets the drum clicked
export const drumBeat = (id) => ({ type: DRUM_CLICKED, drumClicked: id, });

//sets the position of the volume slider
export const sliderMove = (position) => ({ type: SLIDER_MOVED, position: position, });

//starts the game
export const startGame = (started) => ({ type: START, gameStarted: started });

//changes the bank
export const bankChange = (bank) => ({ type: BANK_CHANGED, bank: bank });
