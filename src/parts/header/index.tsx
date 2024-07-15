import { useMenu } from "../../hooks/useMenu"
import "./header.scss"
import { useApiData } from "../../hooks/useApiData"
import { Link, NavLink } from "react-router-dom"
import { Dropdown } from "../../components/dropdown"
import { useBlur } from "../../hooks/useBlur"

export function Header() {
  const { isMenuOpened, setIsMenuOpened } = useMenu()
  const { isBlur, setIsBlur } = useBlur()
  const { redesSociais, isLoading } = useApiData()

  const onClickMenu = () => {
    setIsMenuOpened(!isMenuOpened)
    setIsBlur(!isBlur)
  }

  const onClickLink = () => {
    setIsMenuOpened(false)
    setIsBlur(false)
  }

  return (
    <header className="menu-principal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="menu-left">
              <Link to="/home">Lucca Soncini</Link>
            </div>

            {isLoading ? null : (
              <div className="menu-right">
                <div className={isMenuOpened ? "open-menu opened" : "open-menu"} onClick={onClickMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={isMenuOpened ? "navigation opened" : "navigation"}>
                  <nav className="menu">
                    <ul>
                      <Dropdown />
                      <li>
                        <NavLink
                          onClick={() => onClickLink()}
                          to="/blog"
                          className={({ isActive }) => (isActive ? "ativo" : undefined)}
                        >
                          Blog
                        </NavLink>
                      </li>
                    </ul>
                    <div className="redes-sociais">
                      {redesSociais.map(({ icone, url }, i) => {
                        return (
                          <a href={url} target="_blank" key={i} rel="noreferrer" >
                            <img src={icone} alt="" />
                          </a>
                        )
                      })}
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
