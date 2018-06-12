import { createStore } from 'redux';

const initialState = { nameButton: '' };

const store = createStore(allReducers, initialState, window.devToolsExtension &&
window.devToolsExtension());

export default store;
