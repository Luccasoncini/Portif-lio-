import { ToastContainer } from "react-toastify"
import { AboutSection } from "../../sections/about"
import { ContactFormSection } from "../../sections/contactForm"
import { IntroductionSection } from "../../sections/introduction"
import { SkillsSection } from "../../sections/skills"
import { WorksSection } from "../../sections/works"
import "react-toastify/dist/ReactToastify.css"
import { useApiData } from "../../../hooks/useApiData"

export function Home() {
  return (
    <>
      <IntroductionSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactFormSection />

      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </>
  )
}
