import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

import "./footer.scss"
import { useApiData } from "../../hooks/useApiData"

export function Footer() {
  const { redesSociais } = useApiData()

  return (
    <footer className="footer-principal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Lucca</h2>
            <div className="redes-sociais-footer">
              {redesSociais.map(({ icone, url }, i) => {
                return (
                  <a href={url} target="_blank" key={i}>
                    <img src={icone} alt="" />
                  </a>
                )
              })}
            </div>
            <p>Feito com ♥ por Lucca Dias Soncini</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
