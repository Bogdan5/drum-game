import { DRUM_CLICKED, SLIDER_MOVED, START } from './types.js';

export const drumBeat = (name) => ({ type: DRUM_CLICKED, nameButton: name, });

export const sliderMove = (position) => ({ type: SLIDER_MOVED, position: position, });

export const startGame = (started) => ({ type: START, gameStarted: started });
