import React from 'react';
import { StyledMessageDiv, StyledMessage, StyledMessageClose } from './styles';
import Button from './../button';

const Notification = ({ message = 'Success/Error/Warning messages', type }) => {
    const hideNotification = () => {
        document.getElementById('notificationMessage').style.display = 'none';
    };

    return (
        <StyledMessageDiv id="notificationMessage">
            <StyledMessageClose onClick={hideNotification}>
                {'X'}
            </StyledMessageClose>
            <StyledMessage>{message}</StyledMessage>
        </StyledMessageDiv>
    );
};

export default Notification;
