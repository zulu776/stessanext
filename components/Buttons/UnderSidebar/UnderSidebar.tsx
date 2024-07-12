import Link from 'next/link';
import React from 'react';

function UnderSidebar() {
  return (
    <div className='lg:w-[50%] w-[90%] flex justify-between text-lg font-medium text-gray-500 '>
      <Link href={''}>MUJER</Link>
      <Link href={''}>HOMBRE</Link>
      <Link href={''}>KIDS</Link>
      <Link href={''}>LETRAS</Link>
      <Link href={''}>CONOCE TU TALLA</Link>
      <Link href={''}>REVIEWS</Link>
    </div>
  );
}

export default UnderSidebar;
