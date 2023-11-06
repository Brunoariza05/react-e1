import React from "react";
import '../hojas-de-estilo/Products.css';

const Products = () => {
    return (
        <section className="products" id="DESTACADOS">
            <h2 id="titulo-destacados">productos destacados</h2>
            <div className="contenedor-productos">
            <div className="libro-destacado">
                <h3>EL PRINCIPITO</h3>
                <img src="/imagenes/principito.webp"/>
                <p>$5000</p>
            </div>
            <div className="libro-destacado">
                <h3>LA BIBLIA</h3>
                <img src="/imagenes/biblia.webp"/>
                <p>$7500</p>
            </div>            
            <div className="libro-destacado">
                <h3>ANA FRANK</h3>
                <img src="/imagenes/ana.jpg"/>
                <p>$5000</p>
            </div>
            <div className="libro-destacado">
                <h3>100 AÑOS DE SOLEDAD</h3>
                <img src="/imagenes/soledad.webp"/>
                <p>$7000</p>
            </div>
            <div className="libro-destacado">
                <h3>MARTIN FIERRO</h3>
                <img src="/imagenes/fierro.webp"/>
                <p>$5000</p>
            </div>
            <div className="libro-destacado">
                <h3>EL SEÑOR DE LOS ANILLOS</h3>
                <img src="/imagenes/señor.webp"/>
                <p>$5000</p>
            </div>
            </div>
        </section>
    )
};

export default Products;