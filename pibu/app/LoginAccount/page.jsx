'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/login', { username, password });
            console.log(response.data);
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
                        Username
                    </label>
                    <input
                        type="username"
                        name="username"
                        id="username"
                        className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
