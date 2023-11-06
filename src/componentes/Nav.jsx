import React from "react";
import '../hojas-de-estilo/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
         <nav className="nav">
            <FontAwesomeIcon icon={faBook} className="logo"/>
            <ul>
                <li><a href="#NOSOTROS">NOSOTROS</a></li>
                <li><a href="#DESTACADOS">DESTACADOS</a></li>
                <li><a href="#CONTACTO">CONTACTO</a></li>
            </ul>
         </nav>
    );
};

export default Nav;