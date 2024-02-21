'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/login', { email, password });
            // Check if the response is successful and handle accordingly
            console.log(response.data); // Log the response for now
            // Redirect the user to the dashboard upon successful login
            window.location.href = '/Dashboard';
        } catch (error) {
            // Handle error response from the server
            setError('Login failed. Please check your credentials.');
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
            <form className="space-y-6 px-6" onSubmit={handleSubmit}>
                <h3 className="text-xl font-medium text-secondary">
                    Ready to dive in? Login now!
                </h3>
                {error && <p className="text-red-500">{error}</p>}
                <div>
                    <label className="text-sm font-medium text-accent block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-accent block mb-2"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="bg-primary border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                required
                            />
                        </div>
                        <div className="text-sm ml-3">
                            <label htmlFor="remember" className="font-medium text-accent ">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <a href="#" className="text-sm text-accent hover:underline">
                        Forgot Password?
                    </a>
                </div>
                <button type="submit" className="btn w-full bg-secondary hover:bg-accent hover:text-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Login to your account
                </button>
                <div className="text-sm font-medium text-secondary dark:text-gray-300">
                    Not registered?{' '}
                    <Link href="/CreateAccount" className="text-accent hover:underline dark:text-blue-500">
                        Create account
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
