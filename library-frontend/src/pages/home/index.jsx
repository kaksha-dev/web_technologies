import React, { useState, useEffect } from 'react';
import DataTable from './../../common/components/dataTable';
import { useHistory } from 'react-router-dom';
import Spinner from './../../common/components/spinner';
import Modal from './../../common/components/modal';
import Notification from './../../common/components/notification';

const Home = () => {
    const history = useHistory();
    const [books, setBooks] = useState([]);
    const [booksDataLoading, setBooksDataLoading] = useState(false);
    const [selectedBook, setSelectedBook] = useState({});
    const [deleteBookSuccess, setDeleteBookSuccess] = useState(false);

    useEffect(() => {
        getBooksData();
    }, []);

    const getBooksData = () => {
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
    };

    const submitClickHandler = () => {
        console.log('Custom add book functionality');
        history.push('/addbooks');
        // window.history.pushState('/addbooks');
    };

    const editBookAction = (selectedBook) => {
        console.log('Edit books called with book as: ', selectedBook);
        history.push({ pathname: '/editbooks', selectedBook: selectedBook });
    };

    const showDeletePopUp = (selectedBook) => {
        setSelectedBook(selectedBook);
        var x = document.getElementById('deleteModal');
        document.getElementById('deleteModal').style.display = 'block';
    };

    const hideDeletePopUp = () => {
        setSelectedBook(selectedBook);
        document.getElementById('deleteModal').style.display = 'none';
    };

    const deleteBookHandler = () => {
        // make api call to delete the book from server
        fetch(`http://localhost:3001/books/${selectedBook._id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                hideDeletePopUp();
                if (response.ok) {
                    // show success message
                    setDeleteBookSuccess(true);
                    getBooksData();
                }
                return response.json();
            })
            .then((data) => {
                // books = data;
                console.log('The books from api response are: ', books);
            });
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
                {deleteBookSuccess ? (
                    <Notification
                        message="Deletion successfull"
                        type="success"
                    />
                ) : (
                    ``
                )}
                <div className="row">
                    <div className="col-9">
                        <section>
                            {booksDataLoading ? (
                                <Spinner />
                            ) : (
                                <DataTable
                                    books={books}
                                    dataLoading={booksDataLoading}
                                    editAction={editBookAction}
                                    deleteAction={showDeletePopUp}
                                />
                            )}
                        </section>
                    </div>
                    <div className="col-3">
                        <aside>Quotes</aside>
                    </div>
                </div>
            </div>
            <Modal
                modalId="deleteModal"
                modalTitle="Delete Confirmation"
                okAction={deleteBookHandler}
                okButtonlabel="Confirm"
                modalBody="Are you you want to delete ?"
            >
                <p>
                    Do you really want to delete the book:{' '}
                    <span>{selectedBook.name}</span>
                </p>
            </Modal>
        </>
    );
};

export default Home;
