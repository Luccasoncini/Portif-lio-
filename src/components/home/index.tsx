import './home.scss';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import fotoLucca from '../../assets/img/fotoLucca.jpg'


export function Home() {
    return(
        <section className="homepage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="homepage-principal-content">
                            <h1>
                                Olá, me chamo<br></br><span>Lucca</span>, sou<br></br>Desenvolvedor<br></br>Front-end
                            </h1>
                            <a className="contacts-button" href="">Contatos</a>
                            <div className="homepage-redes-sociais">
                                <div className="redes-sociais">
                                    <a href="https://www.linkedin.com/in/lucca-soncini-727930207/" target="_blank"><FaLinkedinIn /></a>
                                    <a href="https://github.com/Luccasoncini" target="_blank"><FaGithub /></a>
                                </div>
                                <img src={fotoLucca} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}