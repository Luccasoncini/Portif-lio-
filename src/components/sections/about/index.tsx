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

  const title = aboutData.title
  const text = aboutData.text
  const constraintsRef = useRef(null)

  if (!title && !text) {
    return null
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
      <motion.div ref={constraintsRef} className="container-icons">
        <motion.div
          className="icon voleyball"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={iconsVariantsRight}
          drag
          dragConstraints={constraintsRef}
        >
          <MdSportsVolleyball />
        </motion.div>
        <motion.div
          className="icon soccer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={iconsVariantsRight}
          drag
          dragConstraints={constraintsRef}
        >
          <MdOutlineSportsSoccer />
        </motion.div>
        <motion.div
          className="icon computer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={iconsVariantsRight}
          drag
          dragConstraints={constraintsRef}
        >
          <MdOutlineComputer />
        </motion.div>
        <motion.div
          className="icon logoPlaystation"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={iconsVariantsLeft}
          drag
          dragConstraints={constraintsRef}
        >
          <IoLogoPlaystation />
        </motion.div>
        <motion.div
          className="icon controllerPlaystation"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={iconsVariantsLeft}
          drag
          dragConstraints={constraintsRef}
        >
          <GiConsoleController />
        </motion.div>
        <motion.div
          className="icon spotify"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={iconsVariantsLeft}
          drag
          dragConstraints={constraintsRef}
        >
          <FaSpotify />
        </motion.div>
        <motion.div
          className="icon coffe"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={iconsVariantsRight}
          drag
          dragConstraints={constraintsRef}
        >
          <FaCoffee />
        </motion.div>
      </motion.div>
    </section>
  )
}
