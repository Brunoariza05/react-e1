import React from "react";
import '../hojas-de-estilo/Hero2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useMenu } from "../Contexto/ContextoMenu";
import Menu from "../Menu/Menu";


const Hero2 = () => {

    const { menuAbierto } = useMenu();

    return (
        <section className="Hero2" id="NOSOTROS">
            <h2 id="hero2-titulo">¿porque elegirnos?</h2>
            <div id="contenedor-cards-why">
            <div className="why"><p>Realizamos envios en menos de 72hs a todo el pais sin costo</p><FontAwesomeIcon icon={faTruckFast} className="icon-card"/></div>
            <div className="why"><p>Contamos con mas 25 años de experiencia en el rubro</p><FontAwesomeIcon icon={faStar} className="icon-card"/></div>
            <div className="why"><p>Tenemos 12 sucursales distribuidas en el pais y 2 en el exterior</p><FontAwesomeIcon icon={faMapLocationDot} className="icon-card"/>
            </div>
            </div>
            <Menu />
        </section>
    )
};

export default Hero2;