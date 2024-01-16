import { SkillsTechs } from './components/pages/home/skills-techs'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { WorkExperience } from './components/pages/home/work-experience'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import { HomePageData } from './types/page-info'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        introTechs {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          icon
        }
        skillsTechs {
          icon
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          techs {
            name
          }
        }
        workExperiences {
          companyLogo {
            url
          }
          role
          companyName
          companyUrl
          startDate
          endDate
          description {
            raw
          }
          techs {
            name
          }
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  console.log(pageData)

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <SkillsTechs skills={pageData.skillsTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience />
    </>
  )
}
