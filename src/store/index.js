import { createStore } from 'redux';
import drumReducer from '../reducers/reducer.js';

const initialState = { gameStarted: false, bank: false, position: 0.5, drumClicked: null, };

const store = createStore(drumReducer, initialState, window.devToolsExtension &&
window.devToolsExtension());

export default store;
