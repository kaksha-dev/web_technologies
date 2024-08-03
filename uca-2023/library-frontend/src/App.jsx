import React from 'react';
// import Button from './common/components/button';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './common/components/authenticatedRoute';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import EditBooks from './pages/home/editBooks';
import Header from './common/components/header';
import Footer from './common/components/footer';
import AddBooks from './pages/home/addBooks';

function App() {
    // const header = 'Welcome to the react application from index or App';
    // const text1 = 'home page';
    // // let countOfBooks = 1;
    // const bookNames = ['book1', 2];
    // const [countOfBooks, setCountOfBooks] = useState(2);
    // const submitClickHandler = () => {
    //     setCountOfBooks(countOfBooks + 1);
    // };
    // return (
    //     <div>
    //         <p>{header}</p>
    //         <Button
    //             label="Add books"
    //             backgroundColor="blue"
    //             color="white"
    //             clickHandler={submitClickHandler}
    //         />
    //         <hr />
    //         <span>The total count of books is </span>
    //         <span>{countOfBooks}</span>
    //     </div>
    // );

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    {/* <Route exact path="/" component={() => <Home />} /> */}
                    <AuthenticatedRoute
                        exact
                        path="/"
                        component={() => <Home />}
                    />
                    <Route path="/login" component={() => <Login />} />
                    <Route path="/register" component={() => <Register />} />
                    <AuthenticatedRoute path="/addbooks" component={AddBooks} />
                    <AuthenticatedRoute
                        path="/editbooks"
                        component={EditBooks}
                    />
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;
