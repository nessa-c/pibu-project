import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image from next/image

const NavBar = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false); // State to track user login status

    const handleLogout = () => {
        // Implement logout functionality here, e.g., clearing session, updating state, etc.
        setUserLoggedIn(false); // For demonstration, setting userLoggedIn to false
    };

    return (
        <header className='sticky top-5 z-50 m-5'>
            <div className="navbar rounded-box bg-primary">
                <div className="navbar-start">
                    <div className="group dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 z-[1] -ml-1 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/SkincareQuiz">Skincare Quiz</Link></li>
                            <li><Link href="/products">Browse</Link></li>
                            <li><Link href="/">Learn</Link></li>
                            <li><Link href="/">FAQs</Link></li>
                        </ul>
                    </div>
                    <a className='ml-5' href='/'><Image src='/pibulogo.svg' width={160} height={160} alt="logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/SkincareQuiz">Skincare Quiz</Link></li>
                        <li><Link href="/products">Browse</Link></li>
                        <li><Link href="/">Learn</Link></li>
                        <li><Link href="/">FAQs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {userLoggedIn ? (
                        <>
                            <button onClick={handleLogout} className="btn btn-secondary mr-2">
                                Logout
                            </button>
                            <Link href="/Dashboard" className="btn btn-secondary mr-2">Dashboard</Link>
                        </>
                    ) : (
                        <Link href="/LoginAccount" className="btn btn-secondary mr-2">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default NavBar;
