  'use client';
  import NavBar from './components/NavBar';
  import { useState, useEffect } from 'react';
  import Link from 'next/link';
  
  export default function Home() {
  
    return (
      <main className="">
        <img src="homepage.jpg" alt="Generic Skincare Bottles" className="absolute inset-0 w-screen h-screen object-cover z-0" />
        <header className='sticky top-5 z-50 m-5 text-center'>
          <NavBar />
          <div className="flex items-center h-[30vh] relative ml-5">
            <h1 className='z-50 text-4xl font-semibold text-accent w-2/3 text-left'>
              Discover your perfect skincare match with our skincare quiz. Answer a few simple questions and unlock tailored recommendations just for you!
            </h1>
            <Link href="/SkincareQuiz" className="btn btn-secondary text-2xl py-10">Take our Skincare Quiz!</Link>
          </div>
          
        </header>
      </main>
    )
  }
  