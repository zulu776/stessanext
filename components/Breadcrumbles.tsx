import React from 'react';

function Breadcrumbles({ open, handleOpenCardCategory, breadcrumble }) {
  return (
    <div className={open === 0 ? 'hidden' : 'bold'}>
      <button
        type='button'
        onClick={() => handleOpenCardCategory(0)}
        className='button button__link'
      >
        <i className='fas fa-chevron-left pr-2 text-base-yellow hover:text-base-sky' />
        Volver a categorías de {breadcrumble}
      </button>
    </div>
  );
}

export default Breadcrumbles;
