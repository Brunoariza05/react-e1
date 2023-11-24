import React from "react";
import '../hojas-de-estilo/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
 
const Footer = () => {
    return (
        <section className="Footer" id="CONTACTO">
            <div className="logof">
            <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
            <a href="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} className="icon"/></a>
            <a href="https://www.web.whatsapp.com" target="_blank"><FontAwesomeIcon icon={faPhone} className="icon"/></a>
            </div>
            <div className="terminos">
                <a href="https://laantorcha.mercadoshops.com.ar/p/privacidad" target="_blanket" id="terminos"><h1>Terminos y condiciones</h1></a>
            </div>
        </section>
    )
};

export default Footer;