import "./works.scss"

import { useApiData } from "../../../hooks/useApiData"
import { motion } from "framer-motion"
import { fadeIn, fadeInDelayContainer } from "../../../Animation"

export function WorksSection() {
  const { worksData } = useApiData()
  const title = worksData.title
  const trabalhos = worksData.trabalhos

  if (!title || !trabalhos) {
    return null
  }

  return (
    <section id="works" className="works-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="works-principal-content">
              <div className="works-title">
                <motion.h4
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={fadeIn}
                >
                  {title}
                </motion.h4>
              </div>
              <motion.div
                className="works"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={fadeInDelayContainer}
              >
                {trabalhos.map(({ imagem_works, link_works }, i) => {
                  return (
                    <motion.div className="card" key={i} variants={fadeIn}>
                      <div className="front-card">
                        <img src={imagem_works} alt="" />
                      </div>
                      <div className="back-card">
                        <a target="_blank" href={link_works}>
                          Visitar site
                        </a>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
