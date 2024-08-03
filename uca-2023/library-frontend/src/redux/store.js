import { combineReducers, createStore } from 'redux';
import { booksReducer, userReducer } from './reducer';

export const store = createStore(
    combineReducers({ booksReducer, userReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
