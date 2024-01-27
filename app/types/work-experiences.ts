import type { RichTextContent } from '@graphcms/rich-text-types'
import { SkillTech } from './projects'

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  techs: SkillTech[]
  description: {
    raw: RichTextContent
  }
}
