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
                            <div className="homepage-text">
                                <h1>
                                    Olá, me chamo<br></br><span>Lucca</span>, sou<br></br>Desenvolvedor<br></br>Front-end
                                </h1>
                                <a className="contacts-button" href="">Contatos</a>
                            </div>
                            <div className="homepage-img">
                                <img src={fotoLucca} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}