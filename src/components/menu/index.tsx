import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useMenu } from "../../hooks/useMenu";
import "./menu.scss"

export function MenuNavigation() {
    const { isMenuOpened, handleToggleMenu } = useMenu();

    return(
        <div className={ isMenuOpened ? 'navigation opened' : 'navigation'}>
            <nav className="menu">
                <ul>
                    <li><a className="active" onClick={handleToggleMenu} href="">Home</a></li>
                    <li><a className="active" onClick={handleToggleMenu} href="">Sobre Mim</a></li>
                    <li><a className="active" onClick={handleToggleMenu} href="">Habilidades</a></li>
                    <li><a className="active" onClick={handleToggleMenu} href="">Trabalhos</a></li>
                    <li><a className="active" onClick={handleToggleMenu} href="">Contatos</a></li>
                </ul>
                <div className="redes-sociais">
                    <a href="https://www.linkedin.com/in/lucca-soncini-727930207/" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://github.com/Luccasoncini" target="_blank"><FaGithub /></a>
                </div>
            </nav>
        </div>
        
    )
} 