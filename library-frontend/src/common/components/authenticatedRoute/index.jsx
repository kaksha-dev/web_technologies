import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthenticatedRoute = (props) => {
    // const isAuthenticated = localStorage.getItem('isAuthenticated');
    const isAuthenticated = useSelector(
        (state) => state.userReducer.isAuthenticated
    );

    return (
        <>{isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />}</>
    );
};

export default AuthenticatedRoute;
