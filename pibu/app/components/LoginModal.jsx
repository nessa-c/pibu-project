import React, { useState } from 'react';
import Link from 'next/link';

const LoginModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'), // Function to retrieve CSRF token from cookies
            },
            body: JSON.stringify({ username, password }),
        });
        
      if (response.ok) {
        // Login successful
        console.log('Login successful');
        // Optionally redirect the user to another page
      } else {
        const data = await response.json();
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div>
      <button className="btn btn-secondary mr-3 px-5" onClick={() => document.getElementById('login-modal').showModal()}>Login</button>
      <dialog id="login-modal" className="modal">
        <div className="relative w-full max-w-md px-4 h-full md:h-auto">
          <div className="bg-primary rounded-lg shadow relative">
            <div className="flex justify-end pr-2">
              <div className="modal-action">
                <button onClick={() => document.getElementById('login-modal').close()} className="btn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
            <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSubmit}>
              <h3 className="text-xl font-medium text-secondary">Ready to dive in? Login now!</h3>
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <label className="text-sm font-medium text-accent block mb-2">Username</label>
                <input type="text" name="username" id="username" className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-accent block mb-2">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-primary border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
                  </div>
                  <div className="text-sm ml-3">
                    <label htmlFor="remember" className="font-medium text-accent">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm text-accent hover:underline">Forgot Password?</a>
              </div>
              <button type="submit" className="btn w-full bg-secondary hover:bg-accent hover:text-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
              <div className="text-sm font-medium text-secondary dark:text-gray-300">
                Not registered? <Link href="/CreateAccount" className="text-accent hover:underline dark:text-blue-500">Create account</Link>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoginModal;
