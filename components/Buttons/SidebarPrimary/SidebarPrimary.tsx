import React from 'react';

function SidebarPrimary({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={closeSidebar}>
      <div className='sidebar-content' onClick={(e) => e.stopPropagation()}>
        <button onClick={closeSidebar}>Cerrar</button>
        <p>Contenido del sidebar</p>
      </div>
    </div>
  );
}

export default SidebarPrimary;
