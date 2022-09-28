import "./about.scss"

import { MdSportsVolleyball, MdOutlineSportsSoccer, MdOutlineComputer } from "react-icons/md"

import { IoLogoPlaystation } from "react-icons/io"

import { GiConsoleController } from "react-icons/gi"

import { FaSpotify, FaCoffee } from "react-icons/fa"
import { useApiData } from "../../../hooks/useApiData"

export function AboutSection() {
  const { aboutData } = useApiData()

  const title = aboutData.title
  const text = aboutData.text

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-principal-content">
              <h4>{title}</h4>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
          </div>
        </div>
      </div>
      <div className="icon voleyball">
        <MdSportsVolleyball />
      </div>
      <div className="icon soccer">
        <MdOutlineSportsSoccer />
      </div>
      <div className="icon computer">
        <MdOutlineComputer />
      </div>
      <div className="icon logoPlaystation">
        <IoLogoPlaystation />
      </div>
      <div className="icon controllerPlaystation">
        <GiConsoleController />
      </div>
      <div className="icon spotify">
        <FaSpotify />
      </div>
      <div className="icon coffe">
        <FaCoffee />
      </div>
    </section>
  )
}
