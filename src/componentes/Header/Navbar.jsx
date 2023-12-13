import React from "react";
import '../hojas-de-estilo/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useMenu } from "../Contexto/ContextoMenu";
import { useCarrito } from "../Contexto/ContextoCarrito";
import { useCarritoContenido } from "../Contexto/ContextoCarritoContenido";

const Navbar = () => {

    const { toggleMenu } = useMenu();
    const { toggleCarrito } = useCarrito();
    const { totalItems } = useCarritoContenido();

    return (
        <>
         <nav className="nav">
            <FontAwesomeIcon icon={faBook} className="logos"/>
            <ul id="ul">
                <li className="li">
                <Link to="/Hero" className="link" onClick={useMenu}>INICIO</Link>
                </li>
                <li className="li">
                <Link to="/Hero2" className="link" onClick={useMenu}>NOSOTROS</Link>
                </li>
                <li className="li">
                <Link to="/Productos" className="link" onClick={useMenu}>PRODUCTOS</Link>
                </li>
                <li className="li">
                <Link to="/Contacto" className="link" onClick={useMenu}>CONTACTO</Link>
                </li>
            </ul>
            <div id="icons-content">
            <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu}/>
            <FontAwesomeIcon icon={faCartShopping} className="carrito-icon" onClick={toggleCarrito}/>
            <span className="badge" id="productos-cantidad">{totalItems}</span>
            </div>
         </nav>
         <hr></hr>
         </>
    );
};

export default Navbar;