import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ContextoCarrito = createContext();

export const useCarrito = () => {
  return useContext(ContextoCarrito);
};

export const ProveedorCarrito = ({ children }) => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const carritoRef = useRef(null);

  const toggleCarrito = () => {
    setCarritoAbierto((prev) => !prev);
  };

  const handleOpcionSeleccionada = () => {
    setCarritoAbierto(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carritoRef.current && !carritoRef.current.contains(event.target)) {
        handleOpcionSeleccionada();
      }
    };

    if (carritoAbierto) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [carritoAbierto]);

  return (
    <ContextoCarrito.Provider value={{ carritoAbierto, toggleCarrito, handleOpcionSeleccionada }}>
      <div ref={carritoRef}>
        {children}
      </div>
    </ContextoCarrito.Provider>
  );
};
