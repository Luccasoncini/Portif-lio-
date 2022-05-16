import { useMenu } from "../../hooks/useMenu";
import "./menu.scss"

export function MenuNavigation() {
    const { isMenuOpened, handleToggleMenu } = useMenu();

    return(
        <nav className={ isMenuOpened ? 'navigation opened' : 'navigation'}>
            <ul>
                <li><a className="active" onClick={handleToggleMenu} href="">Home</a></li>
                <li><a className="active" onClick={handleToggleMenu} href="">Sobre Mim</a></li>
                <li><a className="active" onClick={handleToggleMenu} href="">Habilidades</a></li>
                <li><a className="active" onClick={handleToggleMenu} href="">Trabalhos</a></li>
                <li><a className="active" onClick={handleToggleMenu} href="">Contatos</a></li>
            </ul>
        </nav>
    )
} 