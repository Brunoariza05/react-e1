import React from "react";
import '../hojas-de-estilo/Contacto.css';
import mapa from "./mapa.jpeg";

const Contacto = () => {
    return (
        <>
        <section id="contacto">
            <h1 id="contacto-titulo">contacto</h1>
            <div id="contacto-contenedor">
            <img src={mapa} id="mapa-contacto"/>
            <form>
                <p id="contacto-form-titulo">formulario</p>
                <input type="text" placeholder="nombre"/>
                <input type="text" placeholder="apellido"/>
                <input type="email" placeholder="email"/>
                <input type="text" placeholder="asunto"/>
                <input type="submit" id="enviar-boton"/>
            </form>
            </div>
        </section>
        </>
    )
};

export default Contacto;