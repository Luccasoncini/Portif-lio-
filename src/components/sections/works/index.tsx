import './works.scss'

import logoSeniorSupport from '../../../assets/svg/seniorSupport.svg'

export function WorksSection() {
    return (
        <section id="works" className="works-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="works-principal-content">
                            <div className="works-title">
                                <h4>Trabalhos</h4>
                            </div>
                            <div className="works">
                                <div className="senior-support">
                                    <div className="front-card">
                                        <img src={logoSeniorSupport} alt="" />
                                    </div>
                                    <div className="back-card">
                                        <a target="_blank" href="https://senior.marmotaweb.com.br/">Visitar site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}