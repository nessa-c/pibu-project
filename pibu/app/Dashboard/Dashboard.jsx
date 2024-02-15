'use client';
import React from 'react';
import NavBar from '../components/NavBar';

const DashboardPage = () => {
    return (
        <div>
            <NavBar />
            <div className='m-5'>
                <h1>Welcome to the Dashboard!</h1>
                <p>This is the main page for logged-in users.</p>
                {/* Add your dashboard components and functionality here */}
            </div>
            
        </div>
    );
};

export default DashboardPage;
