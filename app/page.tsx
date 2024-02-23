import { SkillsTechs } from './components/pages/home/skills-techs'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { WorkExperience } from './components/pages/home/work-experience'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import { HomePageData } from './types/page-info'
import Head from 'next/head'

export const metadata = {
  title: 'Guilherme Henrique',
  description:
    "I'm Guilherme Henrique, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence.",
  openGraph: {
    title: 'Guilherme Henrique | Front end Developer',
    description:
      "I'm Guilherme Henrique, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence.",
    url: 'https://guihenrique.vercel.app/',
    siteName: 'Guilherme Henrique',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/GuiiHenriq/guiihenriq.github.io/main/public/ogimage.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Henrique | Front end Developer',
    url: 'https://guihenrique.vercel.app/',
    description:
      "I'm Guilherme Henrique, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence.",
    images: [
      'https://raw.githubusercontent.com/GuiiHenriq/guiihenriq.github.io/main/public/ogimage.png',
    ],
  },
}

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
      }
      workExperiences(orderBy: createdAt_DESC) {
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
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Guilherme Henrique | Front end Developer" />
        <meta
          name="description"
          content="I'm Guilherme Henrique, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guihenrique.vercel.app/" />
        <meta
          property="og:title"
          content="Guilherme Henrique | Front end Developer"
        />
        <meta
          property="og:description"
          content="I'm Guilherme Henrique, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence."
        />
        <meta property="og:image" content="/ogimage.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://guihenrique.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Guilherme Henrique | Front end Developer"
        />
        <meta
          property="twitter:description"
          content="I'm Guilherme Henrique, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence."
        />
        <meta property="twitter:image" content="/ogimage.png" />
      </Head>

      <HeroSection homeInfo={pageData} />
      <SkillsTechs skills={pageData.skillsTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
