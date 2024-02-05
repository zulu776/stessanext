import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContextProvider } from 'context/toast';

// Importaciones de componentes personalizados

function LayoutPublic({ children }) {
  return (
    <ToastContextProvider>
      <div className='min-w-screen min-h-screen flex flex-col justify-between overflow-hidden'>
        <header className='w-full fixed top-0 left-0 right-0 z-10 overflow-hidden'></header>
        <main className='w-full h-full mt-20 overflow-hidden'>{children}</main>
        <footer className='w-full h-full overflow-hidden'></footer>
      </div>
    </ToastContextProvider>
  );
}
export default LayoutPublic;
