import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
        <>{isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />}</>
    );
};

export default AuthenticatedRoute;
