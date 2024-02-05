import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContextProvider } from 'context/toast';

// Importaciones de componentes personalizados

function LayoutPrivate({ children }) {
  return (
    <ToastContextProvider>
      <div className='w-full min-h-full flex flex-col justify-between overflow-hidden'>
        <header className='noprint'></header>
        <main className='container -top-40'>{children}</main>
        <footer className='noprint'></footer>
      </div>
    </ToastContextProvider>
  );
}
export default LayoutPrivate;
