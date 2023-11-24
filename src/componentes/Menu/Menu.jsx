import '../hojas-de-estilo/Menu.css';
import { useMenu } from "../Contexto/ContextoMenu";
import { Link } from 'react-router-dom';
import { useMenuContext } from '../Contexto/ContextoMenu';

const Menu = () => {

    const { menuAbierto } = useMenu();

    const {handleOpcionSeleccionada} = useMenuContext();

    return (
        <>
        <div className={`menus ${menuAbierto ? 'abierto' : ''}`}>
            <ul id="lista-menu">
                <li>
                <Link to="/Hero" className="link" onClick={handleOpcionSeleccionada}>INICIO</Link>
                </li>
                <li>
                <Link to="/Hero2" className="link" onClick={handleOpcionSeleccionada}>NOSOTROS</Link>
                </li>
                <li>
                <Link to="/Productos" className="link" onClick={handleOpcionSeleccionada}>PRODUCTOS</Link>
                </li>
                <li>
                <Link to="/Contacto" className="link" onClick={handleOpcionSeleccionada}>CONTACTO</Link>
                </li>
            </ul>
        </div>
        </>
    )
};

export default Menu;