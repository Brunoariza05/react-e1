import React from "react";
import '../hojas-de-estilo/CarritoTemplate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useCarritoContenido } from "../Contexto/ContextoCarritoContenido";

const CarritoTemplate = ( {producto} ) => {

    const {titulo, imagen, precio, cantidad, id} = producto;
    const { restarDelCarrito, sumarAlCarrito } = useCarritoContenido();

    return (
        <>
        <div id='producto-agregado'>
            <div id='book-data'>
                <p id='book-name'>{producto.titulo}</p>
                <p id='book-price'>$ {producto.precio}</p>
            </div>
            <img src={producto.imagen} id='book-img'/>
            <div id='book-quantity-div'>
                <div>
                  <p id='book-quantity'>CANTIDAD : {cantidad}</p>
                </div>
                <div id='book-buttons'>
                  <FontAwesomeIcon icon={faPlus} className="book-buttons" id='sumar' onClick={() => sumarAlCarrito(producto.id)}/>
                  <FontAwesomeIcon icon={faMinus}  className="book-buttons" id='restar' onClick={() => restarDelCarrito(producto.id)}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default CarritoTemplate;
