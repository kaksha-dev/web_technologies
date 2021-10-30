import React from 'react';
import Button from './../../common/components/button';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const submitClickHandler = () => {
        console.log('Custom add book functionality');
        // history.push('/addbooks');
        // window.history.pushState('/addbooks');
    };
    return (
        <>
            <h2>Home Page of the application</h2>
            <Button
                label="Add Books Custom"
                backgroundColor="blue"
                color="white"
                clickHandler={submitClickHandler}
            />
        </>
    );
};

export default Home;
