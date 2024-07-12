import React, { useState } from 'react';
function BottomBar(params) {
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(false);
  const [list4, setList4] = useState(false);

  const toggle1 = () => {
    setList1(!list1);
    setList2(false);
    setList3(false);
    setList4(false);
  };
  const toggle2 = () => {
    setList1(false);
    setList2(!list2);
    setList3(false);
    setList4(false);
  };
  const toggle3 = () => {
    setList1(false);
    setList2(false);
    setList3(!list3);
    setList4(false);
  };
  const toggle4 = () => {
    setList1(false);
    setList2(false);
    setList3(false);
    setList4(!list4);
  };
  return (
    <div className='w-full h-full fade-animation flex justify-center'>
      <div className='w-full h-full flex justify-between p-5 md:hidden flex-col '>
        <div>
          <button onClick={toggle1}>MENU</button>
          <div className='w-full border-solid border border-black ' />
          {list1 && (
            <ul className='space-dropMenu'>
              <li>Que es Stessa</li>
              <li>Materiales</li>
              <li>Conoce tu talla</li>
              <li>Acerca de Carolina </li>
            </ul>
          )}
        </div>
        <div>
          {' '}
          <button onClick={toggle2}>MÁS INFORMACIÓN</button>
          <div className='w-full border-solid border border-black ' />
          {list2 && (
            <ul className='space-dropMenu '>
              <li>Que es Stessa</li>
              <li>Materiales</li>
              <li>Conoce tu talla</li>
              <li>Acerca de Carolina </li>
            </ul>
          )}
        </div>
        <div>
          {' '}
          <button onClick={toggle3}>CONTÁCTANOS</button>
          <div className='w-full border-solid border border-black ' />
          {list3 && (
            <ul className='space-dropMenu'>
              <li>Que es Stessa</li>
              <li>Materiales</li>
              <li>Conoce tu talla</li>
              <li>Acerca de Carolina </li>
              <li>Acerca de Carolina </li>
              <li>Acerca de Carolina </li>
              <li>Acerca de Carolina </li>
              <li>Acerca de Carolina </li>
            </ul>
          )}
        </div>
        <div>
          {' '}
          <button onClick={toggle4}>SUSCRIBETE</button>
          <div className='w-full border-solid border border-black ' />
          {list4 && (
            <ul className='space-dropMenu'>
              <li>Que es Stessa</li>
              <li>Materiales</li>
              <li>Conoce tu talla</li>
              <li>Acerca de Carolina </li>
            </ul>
          )}
        </div>
      </div>
      <div className='hidden md:block lg:w-[70%] w-[90%]'>
        <div className='flex '>
          <div className='flex justify-between w-[80%] '>
            <div>
              <p className='tittle_bottom'>MENÚ</p>
              <p>¿Que es Stessa Activewear?</p>
              <p>Materiales</p>
              <p>Conoce tu talla</p>
              <p>Reviews</p>
            </div>
            <div>
              <p className='tittle_bottom'>MÁS INFORMACIÓN</p>
              <p>Preguntas frecuentes</p>
              <p>Empaques</p>
              <p>Envíos</p>
              <p>Cambios</p>
              <p>Garantías</p>
              <p>Políticas de privacidad</p>
              <p>Términos y condiciones</p>
            </div>
            <div>
              <p className='tittle_bottom'>CONTÁCTANOS</p>
              <p>Contáctanos</p>
              <p>WhatsApp</p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className='flex justify-center w-[30%]'>SUSCRÍBETE</div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
