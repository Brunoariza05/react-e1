import React from "react";
import ProductosTemplate from "./ProductosTemplate";
import '../hojas-de-estilo/Products.css';

const Products = () => {

    const productos = [
        {titulo: "El Principito", imagen: "/imagenes/principito.webp", precio: "$5000"},
        {titulo: "La Biblia", imagen: "/imagenes/biblia.webp", precio: "$7500"},
        {titulo: "Ana Frank", imagen: "/imagenes/ana.jpg", precio: "$5000"},
        {titulo: "100 Años De Soledad", imagen: "/imagenes/soledad.webp", precio: "$7000"},
        {titulo: "Martin Fierro", imagen: "/imagenes/fierro.webp", precio: "$5000"},
        {titulo: "El Señor De Los Anillos", imagen: "/imagenes/señor.webp", precio: "$5000"},
        {titulo: "Harry Potter 1", imagen: "/imagenes/harry1.webp", precio: "$9000"},
        {titulo: "Harry Potter 2", imagen: "/imagenes/harry2.webp", precio: "$9000"},
        {titulo: "Harry Potter 3", imagen: "/imagenes/harry3.webp", precio: "$9000"},
        {titulo: "Harry Potter 4", imagen: "/imagenes/harry4.webp", precio: "$9000"},
        {titulo: "Harry Potter 5", imagen: "/imagenes/harry5.webp", precio: "$9000"},
        {titulo: "Harry Potter 6", imagen: "/imagenes/harry6.webp", precio: "$9000"}
    ];

    return (
        <section className="products" id="PRODUCTOS">
            <h2 id="titulo-destacados">nuestros productos</h2>
            <div className="contenedor-productos">

            {productos.map((product, index) => (
            <ProductosTemplate key={index} {...product} />
             ))}        
            </div>
        </section>
    )
};

export default Products;