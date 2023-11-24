import '../hojas-de-estilo/Menu.css';
import { useMenu } from "../Contexto/ContextoMenu";
import { Link } from 'react-router-dom';

const Menu = () => {

    const { menuAbierto } = useMenu();

    return (
        <>
        <div className={`menus ${menuAbierto ? 'abierto' : ''}`}>
            <ul id="lista-menu">
                <li>
                <Link to="/Hero" className="link">INICIO</Link>
                </li>
                <li>
                <Link to="/Hero2" className="link">NOSOTROS</Link>
                </li>
                <li>
                <Link to="/Productos" className="link">PRODUCTOS</Link>
                </li>
                <li>
                <Link to="/Contacto" className="link">CONTACTO</Link>
                </li>
            </ul>
        </div>
        </>
    )
};

export default Menu;