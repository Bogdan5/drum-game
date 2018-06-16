import { createStore } from 'redux';
import drumReducer from './reducers/reducer.js';

const initialState = {};

const store = createStore(drumReducer, window.DEV_TOOLS && window.DEV_TOOLS());

export default store;
