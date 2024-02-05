import React from 'react';

// Importaciones de componentes personalizados
import { SelectInput } from '@components/StyledComponents';

function SearchBar({ searchState, setSearchState, data }) {
  return (
    <div className='w-full relative overflow-hidden'>
      <SelectInput
        opts={data}
        setSelected={(selected): void => setSearchState(selected)}
        isMulti={false}
        selectName={searchState}
        placeholder='Digita aquí…'
        text=''
      />
    </div>
  );
}

export default SearchBar;
