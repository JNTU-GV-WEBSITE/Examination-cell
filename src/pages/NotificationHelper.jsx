import React from 'react';
import './About.css';
import Notifications from './Notifications/Notifications';

function NotificationHelper() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Notifications</h1>
                </div>
            </header>

            <div className='container my-5'>
                <Notifications />
            </div>
        </div>
    );
}

export default NotificationHelper;
