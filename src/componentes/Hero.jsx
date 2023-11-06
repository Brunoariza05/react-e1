import React from "react";
import '../hojas-de-estilo/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="NOSOTROS"> 
        <img src="/imagenes/books.jpg" className="heroi" id="img-no"/>
        <img src="/imagenes/books2.jpg" className="heroi"/>
        <div id="contenedor-hero">
        <h2 id="titulo">libreria antorcha</h2>
        <p id="subtitulo">te entretenemos a través de los libros</p>
        </div>
        <img src="/imagenes/books3.jpg"className="heroi"/>
        <img src="/imagenes/books4.jpg"className="heroi" id="img-no"/>
        </section>
    )
};

export default Hero;