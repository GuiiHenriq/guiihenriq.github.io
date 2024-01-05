import { SkillsTechs } from './components/skills-techs'
import { HeroSection } from './components/pages/home/hero-section'
SkillsTechs

export default async function Home() {
  return (
    <>
      <HeroSection />
      <SkillsTechs />
    </>
  )
}
