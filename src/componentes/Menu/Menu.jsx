import '../hojas-de-estilo/Menu.css';
import { useMenu } from "../Contexto/ContextoMenu";

const Menu = () => {

    const { menuAbierto } = useMenu();

    return (
        <>
        <div className={`menus ${menuAbierto ? 'abierto' : ''}`}>
            <ul id="lista-menu">
                <li>NOSOTROS</li>
                <li>DESTACADOS</li>
                <li>CONTACTOS</li>
            </ul>
        </div>
        </>
    )
};

export default Menu;