import { SET_BOOKS_LIST, SET_SELECTED_BOOK } from './actions';

const initialBooksState = {
    books: [],
    selectedBook: {},
};

const initialUsersState = {
    books: [],
    selectedBook: {},
};

export const booksReducer = (state = initialBooksState, action) => {
    switch (action.type) {
        case SET_SELECTED_BOOK:
            return { ...state, selectedBook: action.payload };
        case SET_BOOKS_LIST:
            return { ...state, books: action.payload };
        default:
            return { ...state };
    }
};
