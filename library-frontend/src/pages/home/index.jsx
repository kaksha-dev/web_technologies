import React, { useState, useEffect } from 'react';
import DataTable from './../../common/components/dataTable';
import { useHistory } from 'react-router-dom';
import Spinner from './../../common/components/spinner';

const Home = () => {
    const history = useHistory();
    const [books, setBooks] = useState([]);
    const [booksDataLoading, setBooksDataLoading] = useState(false);

    useEffect(() => {
        setBooksDataLoading(true);
        fetch('http://localhost:3001/books')
            .then((response) => {
                setBooksDataLoading(false);
                return response.json();
            })
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

    const editBookAction = () => {
        console.log('Edit books called');
        history.push('/editbooks');
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
                    <div className="col-7">
                        <section>
                            {booksDataLoading ? (
                                <Spinner />
                            ) : (
                                <DataTable
                                    books={books}
                                    dataLoading={booksDataLoading}
                                    editAction={editBookAction}
                                />
                            )}
                        </section>
                    </div>
                    <div className="col-5">
                        <aside>Quotes</aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
