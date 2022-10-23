import "./about.scss"

import { MdSportsVolleyball, MdOutlineSportsSoccer, MdOutlineComputer } from "react-icons/md"

import { IoLogoPlaystation } from "react-icons/io"

import { GiConsoleController } from "react-icons/gi"

import { FaSpotify, FaCoffee } from "react-icons/fa"
import { useApiData } from "../../../hooks/useApiData"
import { motion } from "framer-motion"
import { useRef } from "react"
import { fadeIn, iconsVariantsLeft, iconsVariantsRight } from "../../../Animation"

export function AboutSection() {
  const { aboutData } = useApiData()

  const constraintsRefVoleyball = useRef(null)
  const constraintsRefSoccer = useRef(null)
  const constraintsRefComputer = useRef(null)
  const constraintsRefPlaystation = useRef(null)
  const constraintsRefController = useRef(null)
  const constraintsRefSpotify = useRef(null)
  const constraintsRefCoffe = useRef(null)

  const title = aboutData.title
  const text = aboutData.text

  if (!title && !text) {
    return null
  }

  const Icons = [
    {
      NameClass: "icon voleyball",
      icon: <MdSportsVolleyball />,
      NomeReferencia: constraintsRefVoleyball
    },
    {
      NameClass: "icon soccer",
      icon: <MdOutlineSportsSoccer />,
      NomeReferencia: constraintsRefSoccer
    },
    {
      NameClass: "icon computer",
      icon: <MdOutlineComputer />,
      NomeReferencia: constraintsRefComputer
    },
    {
      NameClass: "icon logoPlaystation",
      icon: <IoLogoPlaystation />,
      NomeReferencia: constraintsRefPlaystation
    },
    {
      NameClass: "icon controllerPlaystation",
      icon: <GiConsoleController />,
      NomeReferencia: constraintsRefController
    },
    {
      NameClass: "icon spotify",
      icon: <FaSpotify />,
      NomeReferencia: constraintsRefSpotify
    },
    {
      NameClass: "icon coffe",
      icon: <FaCoffee />,
      NomeReferencia: constraintsRefCoffe
    }
  ]

  const renderIcons = () => {
    return Icons.map(({ icon, NameClass, NomeReferencia }, i) => {
      return (
        <motion.div
          key={i}
          ref={NomeReferencia}
          className={NameClass}
          initial="offscreen"
          whileInView="onscreen"
          variants={iconsVariantsRight}
        >
          <motion.div viewport={{ once: true, amount: 0.8 }} drag dragConstraints={NomeReferencia}>
            {icon}
          </motion.div>
        </motion.div>
      )
    })
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              className="about-principal-content"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn}
            >
              <h4>{title}</h4>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div className="container-icons">{renderIcons()}</motion.div>
    </section>
  )
}
