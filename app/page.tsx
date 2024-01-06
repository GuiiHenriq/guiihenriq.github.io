import { SkillsTechs } from './components/skills-techs'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
SkillsTechs

export default async function Home() {
  return (
    <>
      <HeroSection />
      <SkillsTechs />
      <HighlightedProjects />
    </>
  )
}
