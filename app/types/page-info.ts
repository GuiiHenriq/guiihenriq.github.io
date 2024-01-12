import { SkillTech } from './projects'
import type { RichTextContent } from '@graphcms/rich-text-types'

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
}

export type HomePageData = {
  page: HomePageInfo
}
