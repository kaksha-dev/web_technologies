import {
    SET_BOOKS_LIST,
    SET_SELECTED_BOOK,
    SET_USER_AUTHENTICATED,
} from './actions';

const initialBooksState = {
    books: [],
    selectedBook: {},
};

const initialUserState = {
    isAuthenticated: false,
    username: '',
};

export const booksReducer = (state = initialBooksState, action) => {
    switch (action.type) {
        case SET_BOOKS_LIST:
            return { ...state, books: action.payload };
        case SET_SELECTED_BOOK:
            return { ...state, selectedBook: action.payload };
        default:
            return { ...state };
    }
};

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SET_USER_AUTHENTICATED:
            return { ...state, isAuthenticated: action.payload };
        default:
            return { ...state };
    }
};
