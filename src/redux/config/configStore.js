import { createStore } from 'redux';
import { combineReducers } from 'redux';
import letters from '../modules/letters';
import character from '../modules/character';

const rootReducer = combineReducers({
    letters,
    character,
});
const store = createStore(rootReducer);

export default store;