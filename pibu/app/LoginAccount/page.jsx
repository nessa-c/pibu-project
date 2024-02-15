import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
            <form className="space-y-6 px-6" action="#">
                <h3 className="text-xl font-medium text-secondary">
                    Ready to dive in? Login now!
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
                        placeholder="••••••••"
                        className="bg-primary border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required=""
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
                                required=""
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
                <Link href="/Dashboard" className="btn w-full bg-secondary hover:bg-accent hover:text-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Login to your account
                </Link>
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
