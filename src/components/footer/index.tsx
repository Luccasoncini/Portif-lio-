import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import './footer.scss'

export function Footer() {
    return(
        <footer className="footer-principal">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Lucca</h2>
                        <div className="redes-sociais-footer">
                            <a href="https://www.linkedin.com/in/lucca-soncini-727930207/" target="_blank"><FaLinkedinIn /></a>
                            <a href="https://github.com/Luccasoncini" target="_blank"><FaGithub /></a>
                        </div>  
                        <p>Feito com ♥ por Lucca Dias Soncini</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}