import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { ProjectPageData, ProjectsPageStaticData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { Metadata } from 'next'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      techs {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `

  try {
    const data = await fetchHygraphQuery<ProjectPageData>(
      query,
      60 * 60 * 24 // 24 hours
    )

    return data
  } catch (error) {
    console.error(`Error fetching project with slug "${slug}":`, error)
    return { project: null }
  }
}

export default async function Project({ params: { slug } }: ProjectProps) {
  try {
    const data = await getProjectDetails(slug)

    if (!data || !data.project) {
      return (
        <div className="container flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Project Not Found
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            The requested project could not be found.
          </p>
        </div>
      )
    }

    return (
      <>
        <ProjectDetails project={data.project} />
        <ProjectSections sections={data.project.sections} />
      </>
    )
  } catch (error) {
    console.error(`Error rendering project with slug "${slug}":`, error)
    return (
      <div className="container flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Error Loading Project
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          There was an error loading the project details.
        </p>
      </div>
    )
  }
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  try {
    const data = await getProjectDetails(slug)

    if (!data || !data.project) {
      return {
        title: 'Project Not Found',
        description: 'The requested project could not be found.',
      }
    }

    return {
      title: data.project.title,
      description: data.project.description.text,
      openGraph: {
        images: [
          {
            url: data.project.thumbnail.url,
            width: 1200,
            height: 630,
          },
        ],
      },
    }
  } catch (error) {
    console.error(
      `Error generating metadata for project with slug "${slug}":`,
      error
    )
    return {
      title: 'Error Loading Project',
      description: 'There was an error loading the project details.',
    }
  }
}
