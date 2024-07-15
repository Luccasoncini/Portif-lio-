import "./footer.scss"
import { useApiData } from "../../hooks/useApiData"
import { motion } from "framer-motion"
import { fadeIn, fadeInDelayContainer } from "../../Animation"

export function Footer() {
  const { redesSociais } = useApiData()

  return (
    <footer className="footer-principal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn}
            >
              Lucca
            </motion.h2>
            <motion.div
              className="redes-sociais-footer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeInDelayContainer}
            >
              {redesSociais.map(({ icone, url }, i) => {
                return (
                  <motion.a href={url} target="_blank" key={i} variants={fadeIn}>
                    <img src={icone} alt="" />
                  </motion.a>
                )
              })}
            </motion.div>
            <p>Feito com ♥ por Lucca Dias Soncini</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
