import React from 'react';
import { useRouter } from 'next/router';

function BreadcrumblesAdmin({ breadcrumbles }) {
  const router = useRouter();
  return (
    <div className='bold'>
      <button
        type='button'
        onClick={() => router.back()}
        className='w-fit font-baseRegular md:font-baseBold lg:font-baseBold text-sm md:text-lg lg:text-lg xl:text-lg text-left bg-transparent text-white hover:text-base-sky pb-2'
      >
        <i className='fas fa-chevron-left pr-2 text-base-yellow hover:text-base-sky' />
        Volver a la tabla de {breadcrumbles}
      </button>
    </div>
  );
}

export default BreadcrumblesAdmin;
