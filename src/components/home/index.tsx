import './home.scss';
import fotoLucca from '../../assets/img/fotoLucca.jpg'
import { GrWordpress, GrReactjs } from 'react-icons/gr'
import { SiCss3, SiTypescript, SiJavascript, SiJquery, SiHtml5 } from 'react-icons/si'
import { DiSass } from 'react-icons/di'

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
            <section className="skills-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skills-principal-content">
                                <div className="skills-title">
                                    <h4>Habilidades</h4>
                                </div>
                                <div className="skills-frontend">
                                    <h5>Desenvolvedor Front-end</h5>
                                    <p>Gosto muito de Front-end foi onde tive meu primeiro contato e desejo continuar me aprimorando, seja em tecnologia, ou em qualidade de código, ainda preciso melhorar diversas coisas como acessibilidade e semântica em minhas aplicações, mas isso é só o começo!</p>
                                    <h5>Minhas Skills:</h5>
                                    <ul>
                                        <li>
                                            <GrWordpress/>
                                        </li>    
                                        <li>
                                            <SiHtml5/>
                                        </li>  
                                        <li>
                                            <SiCss3/>
                                        </li>  
                                        <li>
                                            <SiJavascript/>
                                        </li>  
                                        <li>
                                            <GrReactjs/>
                                        </li>  
                                        <li>
                                            <SiTypescript/>
                                        </li>  
                                        <li>
                                            <DiSass/>
                                        </li>
                                        <li>
                                            <SiJquery/>
                                        </li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </main>
    )
}