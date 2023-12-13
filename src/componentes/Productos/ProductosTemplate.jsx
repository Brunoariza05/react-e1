import React from "react";

const ProductosTemplate = ({producto, agregarAlCarrito}) => {

    const {titulo, imagen, precio, categoria} = producto;

    return (
        <>
        <div className="libro-destacado" id={categoria}>
            <h3>{titulo}</h3>
            <img src={imagen}/>
            <p id="precio">$ {precio}</p>
            <button id="boton-comprar" onClick={() => agregarAlCarrito(producto)}><p>COMPRAR</p></button>
        </div>
        </>
    )
};

export default ProductosTemplate;