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
        </section>
    )
}