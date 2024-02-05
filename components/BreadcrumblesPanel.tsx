import React from 'react';
import { useRouter } from 'next/router';

function BreadcrumblesPanel({ breadcrumble = 'documentos' }) {
  const router = useRouter();

  return (
    <div className='bold'>
      <button
        type='button'
        onClick={() => router.back()}
        className='w-fit font-baseRegular md:font-baseBold lg:font-baseBold text-sm md:text-lg lg:text-lg xl:text-lg text-left bg-transparent text-black hover:text-base-sky pb-2'
      >
        <i className='fas fa-chevron-left pr-2 text-base-yellow hover:text-base-sky' />
        Volver a categorías de {breadcrumble}
      </button>
    </div>
  );
}

export default BreadcrumblesPanel;
