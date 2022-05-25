import { useMenu } from '../../hooks/useMenu';
import './header.scss'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export function Header() {

    const { isMenuOpened, handleToggleMenu } = useMenu();
     
    return(
        <header className="menu-principal">
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <div className="menu-left">
                            <h4>Lucca Soncini</h4>
                        </div>
                
                        <div className="menu-right">
                            <div className={ isMenuOpened ? 'open-menu opened' : 'open-menu'} onClick={handleToggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={ isMenuOpened ? 'navigation opened' : 'navigation'}>
                                <nav className="menu">
                                    <ul>
                                        <li><a className="active" onClick={handleToggleMenu} href="#home">Home</a></li>
                                        <li><a className="active" onClick={handleToggleMenu} href="#about">Sobre Mim</a></li>
                                        <li><a className="active" onClick={handleToggleMenu} href="#skills">Habilidades</a></li>
                                        <li><a className="active" onClick={handleToggleMenu} href="#works">Trabalhos</a></li>
                                        <li><a className="active" onClick={handleToggleMenu} href="#contact">Contatos</a></li>
                                    </ul>
                                    <div className="redes-sociais">
                                        <a href="https://www.linkedin.com/in/lucca-soncini-727930207/" target="_blank"><FaLinkedinIn /></a>
                                        <a href="https://github.com/Luccasoncini" target="_blank"><FaGithub /></a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}