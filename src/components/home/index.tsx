import './home.scss';
import fotoLucca from '../../assets/img/fotoLucca.jpg'


export function Home() {
    return(
        <main className="homepage">
            <section className="introduction-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="introduction-principal-content">
                                <div className="introduction-text">
                                    <h1>
                                        Olá, me chamo<br></br><span>Lucca</span>, sou<br></br>Desenvolvedor<br></br>Front-end
                                    </h1>
                                    <a className="contacts-button" href="">Contatos</a>
                                </div>
                                <div className="introduction-img">
                                    <img src={fotoLucca} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-principal-content">
                                <h4>Sobre mim</h4>
                                <p>Estou cursando Sistemas de<br></br> informação, sou uma pessoa<br></br> interessada na área de desenvolvimento Web, estou me<br></br> profissionalizando na parte de Front-end<br></br> que é onde eu melhor me<br></br> encaixo, atualmente estudando<br></br> tecnologias como React, Sass entre outras, inclusive este site foi desenvolvido nessas tecnologias.</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </main>
    )
}