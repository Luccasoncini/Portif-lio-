import './skills.scss'

import { 
    SiCss3, 
    SiTypescript, 
    SiJavascript, 
    SiJquery, 
    SiHtml5, 
    SiWordpress, 
    SiReact, 
    SiSass 
} from 'react-icons/si'

export function SkillsSection() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skills-principal-content">
                            <div className="skills-title">
                                <h4>Habilidades</h4>
                            </div>
                            <div className="skills-frontend">
                                <div className='skills-frontend-top'>
                                    <h5>Desenvolvedor Front-end</h5>
                                    <p>Front-end foi onde tive meu primeiro contato com programação, é o lugar onde domino uma maior quantidade e densidade de conteúdos e tecnologias, tenho como objetivo continuar me aprimorando ao máximo para conseguir conquistar minha tão sonhada vaga no mercado de programação! atualmente me encontro estudando o React com Typescript, e o proximo passo de estudo que irei tomar com certeza serão os testes, algo que o mercado está pedindo e também algo muito bacana para se trabalhar.</p>
                                </div>
                                <div className='skills-frontend-bottom'>
                                    <h5>Minhas Skills:</h5>
                                    <ul>
                                        <li>
                                            <SiWordpress/>
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
                                            <SiReact/>
                                        </li>  
                                        <li>
                                            <SiTypescript/>
                                        </li>  
                                        <li>
                                            <SiSass/>
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
            </div>    
        </section>
    )
}