import { AboutSection } from '../../sections/about';
import { ContactFormSection } from '../../sections/contactForm';
import { IntroductionSection } from '../../sections/introduction';
import { SkillsSection } from '../../sections/skills';
import { WorksSection } from '../../sections/works';

export function Home() {
    return(
        <>
            <IntroductionSection/>
            <AboutSection/>
            <SkillsSection/>
            <WorksSection/>
            <ContactFormSection/>
        </>
    )
}