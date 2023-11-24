import React, { useContext } from "react";
import '../hojas-de-estilo/Hero.css';
import { useMenu } from "../Contexto/ContextoMenu";
import Menu from "../Menu/Menu";
import { ProveedorMenu } from '../Contexto/ContextoMenu';


const Hero = () => {

    const { menuAbierto } = useMenu();

    return (
        <section className="hero" id="INICIO"> 
        <img src="/imagenes/books.jpg" className="heroi" id="img-no"/>
        <img src="/imagenes/books2.jpg" className="heroi"/>
        <div id="contenedor-hero">
        <h2 id="titulo">libreria antorcha</h2>
        <p id="subtitulo">te entretenemos a través de los libros</p>
        </div>
        <img src="/imagenes/books3.jpg"className="heroi"/>
        <img src="/imagenes/books4.jpg"className="heroi" id="img-no"/>
        <Menu />
        </section>
    )
};

export default Hero;