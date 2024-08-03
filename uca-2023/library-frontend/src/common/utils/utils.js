/**
 * This file have all reusable functaions for date formatting
 */
import { setUserAuthenticated as setUserAuthenticatedRedux } from './../../redux/actions';

export const logoutActions = (dispatch) => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    // history.push('/login');
    dispatch(setUserAuthenticatedRedux(false));
};
