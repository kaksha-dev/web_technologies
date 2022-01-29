export const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK';
export const SET_BOOKS_LIST = 'SET_BOOKS_LIST';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_USER_AUTHENTICATED = 'SET_USER_AUTHENTICATED';

export const setBooksList = (payload) => {
    return {
        type: SET_BOOKS_LIST,
        payload: payload,
    };
};

export const setSelectedBook = (payload) => {
    return {
        type: SET_SELECTED_BOOK,
        payload: payload,
    };
};

export const setUserAuthenticated = (payload) => {
    return {
        type: SET_USER_AUTHENTICATED,
        payload: payload,
    };
};

export const setUserDetails = (payload) => {
    return {
        type: SET_USER_DETAILS,
        payload: payload,
    };
};
