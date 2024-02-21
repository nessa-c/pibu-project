'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/users/register', { email, username, password });
      // Check if the response is successful and handle accordingly
      console.log(response.data); // Log the response for now
      // Redirect the user to the dashboard upon successful registration
      window.location.href = '/Dashboard';
    } catch (error) {
      // Handle error response from the server
      setError('Registration failed. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
      <form className="space-y-6 px-6" onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium text-secondary">
          Create an Account
        </h3>
        <div>
          <label className="text-sm font-medium text-accent block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-accent block mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-accent">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-accent">Confirm password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm password"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn w-full bg-secondary hover:bg-accent hover:text-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
        <div className="text-sm font-medium text-secondary dark:text-gray-300">
          Already have an account?{' '}
          <Link href="/LoginAccount" className="text-accent hover:underline dark:text-blue-500">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
