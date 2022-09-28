import { useMenu } from "../../hooks/useMenu"
import "./header.scss"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { useApiData } from "../../hooks/useApiData"

export function Header() {
  const { isMenuOpened, handleToggleMenu } = useMenu()

  const { redesSociais } = useApiData()

  return (
    <header className="menu-principal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="menu-left">
              <h4>Lucca Soncini</h4>
            </div>

            <div className="menu-right">
              <div className={isMenuOpened ? "open-menu opened" : "open-menu"} onClick={handleToggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={isMenuOpened ? "navigation opened" : "navigation"}>
                <nav className="menu">
                  <ul>
                    <li>
                      <a className="active" onClick={handleToggleMenu} href="#home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="active" onClick={handleToggleMenu} href="#about">
                        Sobre Mim
                      </a>
                    </li>
                    <li>
                      <a className="active" onClick={handleToggleMenu} href="#skills">
                        Habilidades
                      </a>
                    </li>
                    <li>
                      <a className="active" onClick={handleToggleMenu} href="#works">
                        Trabalhos
                      </a>
                    </li>
                    <li>
                      <a className="active" onClick={handleToggleMenu} href="#contact">
                        Contatos
                      </a>
                    </li>
                  </ul>
                  <div className="redes-sociais">
                    {redesSociais.map(({ icone, url }, i) => {
                      return (
                        <a href={url} target="_blank" key={i}>
                          <img src={icone} alt="" />
                        </a>
                      )
                    })}
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
