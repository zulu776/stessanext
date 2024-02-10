import React from 'react';

function SidebarPrimary({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={closeSidebar}>
      <div className='sidebar-content' onClick={(e) => e.stopPropagation()}>
        <div className='flex items-center   '>
          <p className='font-bold'>Hola, Carolina Tobon Varela</p>
          <button className='ml-6 text-xl' onClick={closeSidebar}>
            X
          </button>
        </div>
        <div className='sidebar-items'>
          <p>Detalles de la cuenta</p>
        </div>
        <div className='sidebar-items'>
          <p>Direcciones</p>
        </div>
        <div className='sidebar-items'>
          <p>Restablecer contraseña</p>
        </div>
        <div className='sidebar-items'>
          <p>Cerrar Sesión</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarPrimary;
