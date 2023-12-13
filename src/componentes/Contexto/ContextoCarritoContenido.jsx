import React, { createContext, useState, useContext, useEffect } from 'react';
import { useCarrito } from './ContextoCarrito';

const CarritoContextContenido = createContext();

export const CarritoProvider = ({ children }) => {
  const { toggleCarrito } = useCarrito();
  const [carrito, setCarrito] = useState([]);
  const [carritoLimpiado, setCarritoLimpiado] = useState(false);
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mostrarAvisoCarritoVacio, setMostrarAvisoCarritoVacio] = useState(false);
  const [montoTotal, setMontoTotal] = useState(0);

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
      actualizarMontoTotal(JSON.parse(carritoGuardado));
    }
  }, []);

  const guardarCarritoEnLocalStorage = (nuevoCarrito) => {
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    actualizarMontoTotal(nuevoCarrito);
  };

  const calcularMontoTotal = (carrito) => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const actualizarMontoTotal = (carrito) => {
    const total = calcularMontoTotal(carrito);
    setMontoTotal(total);
    localStorage.setItem('montoTotal', total.toString());
  };

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      const nuevoCarrito = carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
      guardarCarritoEnLocalStorage(nuevoCarrito);
    } else {
      const nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
      setCarrito(nuevoCarrito);
      guardarCarritoEnLocalStorage(nuevoCarrito);
      setMostrarAviso(true);
      setTimeout(() => setMostrarAviso(false), 4000);
    }
  };

  const restarDelCarrito = (productoId) => {
    const nuevoCarrito = carrito.map(item =>
      item.id === productoId
        ? { ...item, cantidad: Math.max(item.cantidad - 1, 0) }
        : item
    ).filter(item => item.cantidad > 0);

    setCarrito(nuevoCarrito);
    guardarCarritoEnLocalStorage(nuevoCarrito);
  };

  const sumarAlCarrito = (productoId, cantidad) => {
    const nuevoCarrito = carrito.map(item =>
      item.id === productoId
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );

    setCarrito(nuevoCarrito);
    guardarCarritoEnLocalStorage(nuevoCarrito);
    setMostrarAviso(true);
    setTimeout(() => setMostrarAviso(false), 4000);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    toggleCarrito(false);
    localStorage.removeItem('carrito');
    setCarritoLimpiado(true);
    setMostrarAvisoCarritoVacio(true);
    actualizarMontoTotal([]);
    setTimeout(() => {
      setCarritoLimpiado(false);
      setMostrarAvisoCarritoVacio(false);
    }, 4000);
  };

  const limpiarCarrito2 = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
    actualizarMontoTotal([]);
  };

  const resetearEstadoCarritoLimpiado = () => {
    setCarritoLimpiado(false);
  };

  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const handleFinalizarCompra = () => {
    setPedidoFinalizado(true);
    toggleCarrito(true);

    setTimeout(() => {
      setPedidoFinalizado(false);
      window.location.reload();
      limpiarCarrito2();
      localStorage.removeItem('carrito');
    }, 3200);
  };

  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CarritoContextContenido.Provider
      value={{
        carrito,
        agregarAlCarrito,
        restarDelCarrito,
        sumarAlCarrito,
        limpiarCarrito,
        limpiarCarrito2,
        pedidoFinalizado,
        totalItems,
        carritoLimpiado,
        handleFinalizarCompra,
        resetearEstadoCarritoLimpiado,
        mostrarAviso,
        mostrarAvisoCarritoVacio,
        montoTotal,
      }}
    >
      {children}
    </CarritoContextContenido.Provider>
  );
};

export const useCarritoContenido = () => {
  const context = useContext(CarritoContextContenido);
  if (!context) {
    throw new Error('useCarrito debe ser utilizado dentro de CarritoProvider');
  }
  const { toggleCarrito, ...restoDelContexto } = context;
  return { toggleCarrito, ...restoDelContexto };
};
