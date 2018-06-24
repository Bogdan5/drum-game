import { createStore } from 'redux';
import drumReducer from '../reducers/reducer.js';

const initialState = { nameButton: '' };

const store = createStore(drumReducer, initialState, window.devToolsExtension &&
window.devToolsExtension());

export default store;
