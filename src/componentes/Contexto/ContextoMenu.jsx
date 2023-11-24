// ContextoMenu.js
import React, { createContext, useContext, useState } from 'react';

const ContextoMenu = createContext();

export const useMenuContext = () => {
  return useContext(ContextoMenu);
};

export const ProveedorMenu = ({ children }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);

   const handleOpcionSeleccionada = () => {
    setMenuAbierto(false);
    console.log("ok")
  };

  const toggleMenu = () => {
    setMenuAbierto((prev) => !prev);
  };

  return (
    <ContextoMenu.Provider value={{ menuAbierto, toggleMenu, handleOpcionSeleccionada }}>
      {children}
    </ContextoMenu.Provider>
  );

};


export const useMenu = () => {
  const contexto = useContext(ContextoMenu);
  if (!contexto) {
    throw new Error('useMenu debe ser utilizado dentro de un ProveedorMenu');
  }
  return contexto;
};

