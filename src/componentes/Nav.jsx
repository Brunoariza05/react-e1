import React from "react";
import '../hojas-de-estilo/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
         <nav className="nav">
            <FontAwesomeIcon icon={faBook} className="logo"/>
            <ul>
                <li><a href="#NOSOTROS" id="lista">NOSOTROS</a></li>
                <li><a href="#DESTACADOS" id="lista">DESTACADOS</a></li>
                <li><a href="#CONTACTO" id="lista">CONTACTO</a></li>
            </ul>
         </nav>
    );
};

export default Nav;