'use client';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className='flex w-full xl:flex'>
      <input 
        type="text" 
        placeholder="Search Product" 
        className="flex-auto input input-bordered xl:flex"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button 
        type="submit"
        className='flex-initial btn btn-secondary ml-2 px-5 xl:flex' 
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;