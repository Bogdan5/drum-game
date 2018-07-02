import { createStore } from 'redux';
import drumReducer from '../reducers/reducer.js';

const initialState = { gameStarted: false, bank: true, position: 0.5, };

const store = createStore(drumReducer, initialState, window.devToolsExtension &&
window.devToolsExtension());

export default store;
