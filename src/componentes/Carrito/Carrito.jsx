import React from 'react';
import '../hojas-de-estilo/Carrito.css';
import { useCarrito } from '../Contexto/ContextoCarrito';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarritoTemplate from './CarritoTemplate';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCarritoContenido } from '../Contexto/ContextoCarritoContenido';

const Carrito = () => {
    const { carritoAbierto, toggleCarrito } = useCarrito();
    const { carrito, limpiarCarrito, handleFinalizarCompra, pedidoFinalizado, montoTotal } = useCarritoContenido();

    return (
        <>
            <div className={`carrito-contenedor ${carritoAbierto ? 'abierto' : ''}`}>
                <div id='title-content'>
                    <p id="carrito-titulo">MI CARRITO</p>
                    <FontAwesomeIcon icon={faTrash} id='borrar' onClick={limpiarCarrito} />
                </div>
                <hr className="uno"></hr>
                <div id='carrito-vacio-contenedor'>
                {carrito.length === 0 ? (
                    <p id='carrito-vacio'>¡AUN NO HAY PRODUCTOS!</p>
                ) : (
                    carrito.map((producto) => (
                        <CarritoTemplate key={producto.id} producto={producto} />
                    ))
                )}
                </div>
                <hr className="uno"></hr>
                <div id='contenedor-final'>
                <h1 id='precio-total'>precio total = ${montoTotal}</h1>
                {carrito.length > 0 && (
                    <button id="button-finalizar-compra" onClick={handleFinalizarCompra}>
                        FINALIZAR COMPRA
                    </button>
                )}
                </div>
            </div>
            {pedidoFinalizado && (
                <div id="pedido-finalizado-div">
                  <div id="contenedor-texto">
                    <h1 id="pedido-finalizado-titulo">EL PEDIDO FUE RELIZADO CON EXITO</h1>
                    <p id="pedido-finalizado-subtitulo">¡En menos de 24 horas el pedido está en la puerta de tu casa!</p>
                  </div>
                </div>
            )}
        </>
    );
};

export default Carrito;
