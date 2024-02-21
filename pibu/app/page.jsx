  'use client';
  import NavBar from './components/NavBar';
  import { useState, useEffect } from 'react';

  export default function Home() {
    
    return (
      <main className="h-[1000px]">
        <header className='sticky top-5 z-50 m-5'>
          <NavBar />
        </header>
      </main>
    )
  }