import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './../../common/components/button';
import Notification from './../../common/components/notification';
import { useDispatch } from 'react-redux';
import { setUserAuthenticated as setUserAuthenticatedRedux } from './../../redux/actions';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [loginFormValues, setLoginFormValues] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const updateLoginFormValues = (event) => {
        setLoginFormValues({
            ...loginFormValues,
            [event.target.id]: event.target.value,
        });
        console.log(
            'Login Component: The entered credntials are: ',
            loginFormValues
        );
    };

    const handleLogin = (event) => {
        event.preventDefault();

        // Make api call to authenticate the user
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginFormValues),
        })
            .then((response) => {
                // If user is authenticate then set localstorage isAuthenticated to true
                // else remove the variable
                if (response.ok) {
                    localStorage.setItem('isAuthenticated', true);
                    setIsAuthenticated(true);
                    dispatch(setUserAuthenticatedRedux(true));
                    history.push('/');
                    console.log('The response headers are: ', response.headers);
                    localStorage.setItem('token', response.headers.token);
                } else {
                    setIsAuthenticated(false);
                }
                return response.json();
            })
            .then((data) => console.log('The user details are ', data));
    };

    const handleLogout = (event) => {
        event.preventDefault();

        // Make api call to logout
        // if request pass then remove the variable
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <>
            <div className="row">
                <div className="offset-md-7 col-md-4">
                    {!isAuthenticated ? (
                        <Notification
                            message="Incorrect username or password"
                            type="failure"
                        />
                    ) : (
                        ``
                    )}
                </div>
            </div>

            <div className="row">
                <div className="offset-md-7 col-md-4">
                    <h4>Login to the library</h4>
                </div>
            </div>

            <form>
                <div className="row">
                    <div className="offset-md-7 col-md-3">
                        <div className="mb-3">
                            <label for="username" class="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                aria-describedby="username"
                                value={loginFormValues?.username}
                                placeholder="Enter username"
                                onChange={updateLoginFormValues}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-7 col-md-3">
                        <div className="mb-3">
                            <label for="password" class="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                aria-describedby="password"
                                value={loginFormValues?.password}
                                placeholder="Enter password"
                                onChange={updateLoginFormValues}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-7 col-md-3">
                        <Button
                            label="LOGIN"
                            clickHandler={handleLogin}
                            disabled={
                                !(
                                    loginFormValues.username &&
                                    loginFormValues.password
                                )
                            }
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;
