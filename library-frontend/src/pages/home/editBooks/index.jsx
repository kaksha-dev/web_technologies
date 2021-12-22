import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledHeader } from './styles';
import Button from './../../../common/components/button';

const EditBooks = () => {
    const history = useHistory();
    const [formValues, setFormValues] = useState(history.location.selectedBook);

    const updateFormValue = (event) => {
        // formValues.name = event.target.value;
        // setFormValues(formValues);

        // let newObject = { ...formValues };
        // newObject[event.target.id] = event.target.value;
        // setFormValues(newObject);

        setFormValues({ ...formValues, [event.target.id]: event.target.value });
        console.log(
            'EditBooksComponent: The selectedbook data is: ',
            formValues
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3001/books/${formValues._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then((response) => {
                if (response.ok) {
                    history.push('/');
                }
                response.json();
            })
            .then((data) => {
                console.log('The created and retubed data is. ', data);
            })
            .catch((error) => {
                window.alert('error');
            });
    };

    return (
        <>
            <StyledHeader>Edit Books</StyledHeader>
            <form>
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <div className="mb-3">
                            <label for="name" class="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="name"
                                value={formValues?.name}
                                placeholder="Enter book name"
                                onChange={updateFormValue}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <div className="mb-3">
                            <label for="name" class="form-label">
                                Author Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="authorName"
                                aria-describedby="authorName"
                                value={formValues?.authorName}
                                placeholder="Enter Author name"
                                onChange={updateFormValue}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <Button label="Submit" clickHandler={handleSubmit} />
                    </div>
                </div>
            </form>
        </>
    );
};

export default EditBooks;
