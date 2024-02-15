import React from 'react';
import Link from 'next/link';

const CreateAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
      <form className="space-y-6 px-6" action="#">
        <h3 className="text-xl font-medium text-secondary">
          Create an Account
        </h3>
          <div>
            <label className="text-sm font-medium text-accent block mb-2">
              Username
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="username"
              required=""
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-accent">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required=""
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-accent">Confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required=""
            />
          </div>
          <Link href="/Dashboard" className="btn w-full bg-secondary hover:bg-accent hover:text-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Create an account
          </Link>
          <div className="text-sm font-medium text-secondary dark:text-gray-300">
            Already have an account?{' '}
            <Link href="/LoginAccount" className="text-accent hover:underline dark:text-blue-500">
              Login here
            </Link>
          </div>
      </form>
    </div>
  );
}

export default CreateAccount;