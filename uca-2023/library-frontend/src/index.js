import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store as reactReduxStore } from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reactReduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
