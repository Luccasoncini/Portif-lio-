import "./skills.scss"

import { SiCss3, SiTypescript, SiJavascript, SiJquery, SiHtml5, SiWordpress, SiReact, SiSass } from "react-icons/si"
import { useApiData } from "../../../hooks/useApiData"

export function SkillsSection() {
  const { skillsData } = useApiData()

  const title = skillsData.titulo_skills
  const titleLeft = skillsData.titulo_skills_text
  const textLeft = skillsData.paragrafo_skills_text
  const titleRight = skillsData.titulo_skills_main
  const icons = skillsData.skills_item_skills_main
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skills-principal-content">
              <div className="skills-title">
                <h4>{title}</h4>
              </div>
              <div className="skills-frontend">
                <div className="skills-frontend-top">
                  <h5>{titleLeft}</h5>
                  <p dangerouslySetInnerHTML={{ __html: textLeft }}></p>
                </div>
                <div className="skills-frontend-bottom">
                  <h5>{titleRight}</h5>
                  <ul>
                    {icons.map(({ icone_skills_main, url_skills_main }, i) => {
                      return (
                        <li key={i}>
                          <a href={url_skills_main}>
                            <span style={{ backgroundImage: `url(${icone_skills_main})` }}></span>
                          </a>
                        </li>
                      )
                    })}
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
