import "./introduction.scss"
import { useApiData } from "../../../hooks/useApiData"
import { motion } from "framer-motion"
import { slideToLeft, slideToRight } from "../../../Animation"

export function IntroductionSection() {
  const { introductionData } = useApiData()

  const title = introductionData.title
  const urlBotaoContato = introductionData.contato.url
  const textoBotaoContato = introductionData.contato.title
  const urlBotaoCurriculo = introductionData.curriculo.url
  const textoBotaoCurriculo = introductionData.curriculo.title
  const imagemLucca = introductionData.image

  if (!title || !urlBotaoContato || !textoBotaoContato || !urlBotaoCurriculo || !textoBotaoCurriculo || !imagemLucca) {
    return null
  }

  return (
    <section id="home" className="introduction-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="introduction-principal-content">
              <motion.div
                className="introduction-text"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={slideToRight}
              >
                <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>

                <div className="container-button">
                  <a className="contacts-button" href={urlBotaoContato}>
                    {textoBotaoContato}
                  </a>
                  <a className="curriculo-button" target="_blank" href={urlBotaoCurriculo}>
                    {textoBotaoCurriculo}
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="introduction-img"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={slideToLeft}
              >
                <img src={imagemLucca} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
