import React from "react";
import '../hojas-de-estilo/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useMenu } from "../Contexto/ContextoMenu";

const Navbar = () => {

    const { toggleMenu } = useMenu();

    return (
         <nav className="nav">
            <FontAwesomeIcon icon={faBook} className="logos"/>
            <ul>
                <li>
                <Link to="/Hero" className="link" onClick={useMenu}>INICIO</Link>
                </li>
                <li>
                <Link to="/Hero2" className="link" onClick={useMenu}>NOSOTROS</Link>
                </li>
                <li>
                <Link to="/Productos" className="link" onClick={useMenu}>PRODUCTOS</Link>
                </li>
                <li>
                <Link to="/Contacto" className="link" onClick={useMenu}>CONTACTO</Link>
                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu}/>
         </nav>
    );
};

export default Navbar;