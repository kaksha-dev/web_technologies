import React, { useState } from 'react';
import Button from './../../common/components/button';
import Notification from './../../common/components/notification';

const Register = () => {
    const [registerFormValues, setRegisterFormValues] = useState({});
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const updateRegisterFormValues = (event) => {
        setRegisterFormValues({
            ...registerFormValues,
            [event.target.id]: event.target.value,
        });
    };

    const initialState = {
        name: '',
        username: '',
        password: '',
    };

    const handleRegister = (event) => {
        event.preventDefault();

        // Make api call to register the user
        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerFormValues),
        })
            .then((response) => {
                if (response.ok) {
                    setRegisterSuccess(true);
                    setRegisterFormValues(initialState);
                } else {
                }
                return response.json();
            })
            .then((data) => console.log('The user details are ', data));
    };

    return (
        <>
            <div className="row">
                <div className="offset-md-7 col-md-4">
                    {registerSuccess ? (
                        <Notification
                            message="User registration successful"
                            type="success"
                        />
                    ) : (
                        ``
                    )}
                </div>
            </div>

            <div className="row">
                <div className="offset-md-7 col-md-4">
                    <h4>Register to the library</h4>
                </div>
            </div>

            <form>
                <div className="row">
                    <div className="offset-md-7 col-md-3">
                        <div className="mb-3">
                            <label for="name" class="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="name"
                                value={registerFormValues?.name}
                                placeholder="Enter name"
                                onChange={updateRegisterFormValues}
                            />
                        </div>
                    </div>
                </div>
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
                                value={registerFormValues?.username}
                                placeholder="Enter username"
                                onChange={updateRegisterFormValues}
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
                                value={registerFormValues?.password}
                                placeholder="Enter password"
                                onChange={updateRegisterFormValues}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-7 col-md-3">
                        <Button
                            label="Submit"
                            clickHandler={handleRegister}
                            // disabled={
                            //     !(
                            //         registerFormValues.username &&
                            //         registerFormValues.password
                            //     )
                            // }
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Register;
