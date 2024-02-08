import React, { useState } from 'react';
import Search from './../Buttons/Search/Search';
import Image from 'next/image';

// Importaciones de componentes personalizados

function SearchBar({ searchState, setSearchState, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchState); // Envía la consulta al componente padre o maneja la búsqueda aquí
  };

  const [placeholder, setPlaceholder] = useState('Buscar prendas en la tienda');

  return (
    <div className='w-full h-10 border rounded m-4'>
      <form className=' w-full p-2' onSubmit={handleSubmit}>
        <button type='submit' className=' w-[5%]'>
          <Image src='/IMG/Buttons/loupe.png' alt='NOT FOUND' width={15} height={15} />
        </button>
        <input
          className='w-[95%] focus:outline-none '
          type='text'
          placeholder={placeholder}
          onFocus={() => setPlaceholder('')}
          onBlur={() => setPlaceholder('Buscar prendas en la tienda')}
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
