import "./works.scss"

import logoSeniorSupport from "../../../assets/svg/seniorSupport.svg"
import { useApiData } from "../../../hooks/useApiData"

export function WorksSection() {
  const { worksData } = useApiData()
  const title = worksData.title
  const trabalhos = worksData.trabalhos

  return (
    <section id="works" className="works-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="works-principal-content">
              <div className="works-title">
                <h4>{title}</h4>
              </div>
              <div className="works">
                {trabalhos.map(({ imagem_works, link_works }, i) => {
                  return (
                    <div className="card" key={i}>
                      <div className="front-card">
                        <img src={imagem_works} alt="" />
                      </div>
                      <div className="back-card">
                        <a target="_blank" href={link_works}>
                          Visitar site
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
