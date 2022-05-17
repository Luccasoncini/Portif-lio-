import { AboutSection } from '../../sections/about';
import { IntroductionSection } from '../../sections/introduction';
import { SkillsSection } from '../../sections/skills';

export function Home() {
    return(
        <>
            <IntroductionSection/>
            <AboutSection/>
            <SkillsSection/>
        </>
    )
}