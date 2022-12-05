import { Fragment, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { BsCaretDown } from "react-icons/bs"
import { useMenu } from "../../hooks/useMenu"
import { useBlur } from "../../hooks/useBlur"
export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { setIsMenuOpened } = useMenu()
  const { setIsBlur } = useBlur()

  const onClickLink = () => {
    setIsMenuOpened(false)
    setIsBlur(false)
  }

  return (
    <Fragment>
      <li className="dropdown-item" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "ativo" : undefined)}
          onClick={() => onClickLink()}
        >
          Home
          <BsCaretDown className={`${isOpen ? "open" : null}`} />
        </NavLink>

        <ul className={`dropdown-list ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/home/inicio" onClick={() => onClickLink()}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/home/sobre-mim" onClick={() => onClickLink()}>
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link to="/home/habilidades" onClick={() => onClickLink()}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="/home/trabalhos" onClick={() => onClickLink()}>
              Trabalhos
            </Link>
          </li>
          <li>
            <Link to="/home/contato" onClick={() => onClickLink()}>
              Contatos
            </Link>
          </li>
        </ul>
      </li>
    </Fragment>
  )
}
