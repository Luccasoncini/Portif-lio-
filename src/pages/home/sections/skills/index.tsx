import "./skills.scss"

import { useApiData } from "../../../../hooks/useApiData"
import { motion } from "framer-motion"
import { fadeIn, fadeInDelayContainer, slideToLeft, slideToRight } from "../../../../Animation"

export function SkillsSection() {
  const { skillsData } = useApiData()

  const title = skillsData.titulo_skills
  const titleLeft = skillsData.titulo_skills_text
  const textLeft = skillsData.paragrafo_skills_text
  const titleRight = skillsData.titulo_skills_main
  const icons = skillsData.skills_item_skills_main

  if (!title || !titleLeft || !textLeft || !titleRight || !icons) {
    return null
  }

  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skills-principal-content">
              <motion.div className="skills-title" initial="offscreen" whileInView="onscreen" variants={fadeIn}>
                <h4>{title}</h4>
              </motion.div>
              <div className="skills-frontend">
                <div className="skills-frontend-top">
                  <motion.h5 initial="offscreen" whileInView="onscreen" variants={slideToRight}>
                    {titleLeft}
                  </motion.h5>
                  <motion.p
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={fadeIn}
                    dangerouslySetInnerHTML={{ __html: textLeft }}
                  ></motion.p>
                </div>
                <div className="skills-frontend-bottom">
                  <motion.h5
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={slideToLeft}
                  >
                    {titleRight}
                  </motion.h5>
                  <motion.ul
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={fadeInDelayContainer}
                  >
                    {icons.map(({ icone_skills_main, url_skills_main }, i) => {
                      return (
                        <li key={i}>
                          <motion.a href={url_skills_main} variants={fadeIn}>
                            <span style={{ backgroundImage: `url(${icone_skills_main})` }}></span>
                          </motion.a>
                        </li>
                      )
                    })}
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
