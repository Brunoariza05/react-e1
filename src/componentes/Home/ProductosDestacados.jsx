import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/ProductosDestacados.css';

const ProductosDestacados = () => {
    return (
        <div id="productos-destacados-div">
        <h1 id="productos-destacados-titulo">productos destacados</h1>
        <div id="contenedor-productos-destacados">
            <div className="producto-destacado">
                <h2 className="producto-destacado-titulo">el principito</h2>
                <img className="producto-destacado-imagen" src="/imagenes/principito.webp"/>
                <h3 className="producto-destacado-precio">$25000</h3>
            </div>
            <div className="producto-destacado">
                <h2 className="producto-destacado-titulo">la biblia</h2>
                <img className="producto-destacado-imagen" src="/imagenes/biblia.webp"/>
                <p className="producto-destacado-precio">$20000</p>
            </div>
            <div className="producto-destacado">
                <h2 className="producto-destacado-titulo">martin fierro</h2>
                <img className="producto-destacado-imagen" src="/imagenes/fierro.webp"/>
                <p className="producto-destacado-precio">$10000</p>
            </div>
        </div>
        <button id="ver-mas"><Link to="/Productos" className="link">ver mas</Link></button>
        </div>
    )
};

export default ProductosDestacados;