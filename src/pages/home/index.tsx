import { useParams } from "react-router-dom"
import { AboutSection } from "./sections/about"
import { ContactFormSection } from "./sections/contactForm"
import { IntroductionSection } from "./sections/introduction"
import { SkillsSection } from "./sections/skills"
import { WorksSection } from "./sections/works"
import { useEffect } from "react"

export function Home() {
  const { id } = useParams()

  useEffect(() => {
    // @ts-ignore
    if (id === undefined) {
      const element = document.getElementById("inicio")
      if (element) {
        element.scrollIntoView()
      }
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [id])

  return (
    <main>
      <IntroductionSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactFormSection />
    </main>
  )
}
