import './Buttons.scss';
import React from 'react';

const NotificationButton = () => {
    return (
        <div className="Notification">
            <button className="Notification_button">
                <i className="bi-bell"></i>
                <div className="Notification_badge"></div>
            </button>
        </div>
    );
};

export default NotificationButton;
