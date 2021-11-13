import React, { useState, useEffect } from 'react';
import DataTable from './../../common/components/dataTable';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then((response) => response.json())
            .then((data) => {
                // books = data;
                console.log('The books from api response are: ', books);
                setBooks(data);
            });
    }, []);

    const submitClickHandler = () => {
        console.log('Custom add book functionality');
        history.push('/addbooks');
        // window.history.pushState('/addbooks');
    };

    // Hard code Data
    // const books = [
    //     { name: 'BOneName', authorName: 'BOneAuthorName' },
    //     { name: 'BTwoName', authorName: 'BTwoAuthorName' },
    //     { name: 'BThreeName', authorName: 'BThreeAuthorName' },
    // ];

    // Fetch data from web service/API
    // let books = [];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <header>Home Page of the application</header>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <section>
                            <DataTable books={books} />
                        </section>
                    </div>
                    <div className="col">
                        <aside>Quotes</aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
