import { combineReducers, createStore } from 'redux';
import { booksReducer } from './reducer';

export const store = createStore(
    combineReducers({
        booksReducer,
    })
);
