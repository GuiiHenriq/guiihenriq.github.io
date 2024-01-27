import type { RichTextContent } from '@graphcms/rich-text-types'
import { SkillTech, Project } from './projects'
import { WorkExperience } from './work-experiences'

export type Social = {
  url: string
  icon: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  introTechs: SkillTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  skillsTechs: SkillTech[]
  highlightProjects: Project[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}
