import './introduction.scss';
import fotoLucca from '../../../assets/img/fotoLucca.jpg';
import curriculoLucca from '../../../assets/docs/curriculoLucca.pdf';

export function IntroductionSection() {
    return(
        <section id="home" className="introduction-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="introduction-principal-content">
                            <div className="introduction-text">
                                <h1>
                                    Olá, me chamo<br></br><span>Lucca</span>, sou<br></br>Desenvolvedor<br></br>Front-end
                                </h1>
                                <div className='container-button'>
                                    <a className="contacts-button" href="#contact">Contatos</a>
                                    <a className="curriculo-button" target="_blank" href={curriculoLucca}>Currículo</a>
                                </div>
                            </div>
                            <div className="introduction-img">
                                <img src={fotoLucca} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}