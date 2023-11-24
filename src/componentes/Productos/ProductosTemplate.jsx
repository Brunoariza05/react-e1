import React from "react";

const ProductosTemplate = (props) => {

    const {titulo, imagen, precio} = props;

    return (
        <>
        <div className="libro-destacado">
            <h3>{titulo}</h3>
            <img src={imagen}/>
            <p id="precio">{precio}</p>
            <div id="boton-comprar"><p>COMPRAR</p></div>
        </div>
        </>
    )
};

export default ProductosTemplate;