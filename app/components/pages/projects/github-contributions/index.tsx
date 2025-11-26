import Image from 'next/image'
import { SectionTitle } from '@/app/components/section-title'

export const GithubContributions = () => {
  return (
    <section className="container mb-12">
      <SectionTitle
        subtitle="open-source"
        title="Github Contributions"
        className="mb-4"
      />
      <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
        <Image
          src="https://ghchart.rshah.org/GuiiHenriq"
          alt="GuiiHenriq's Github Contribution Chart"
          width={1200}
          height={200}
          className="w-full h-auto"
          unoptimized
        />
        <div className="mt-4 flex items-center justify-between">
          <a
            href="https://github.com/GuiiHenriq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors text-sm"
          >
            View more on Github
          </a>
          <a
            href="https://github.com/GuiiHenriq?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors text-sm flex items-center gap-1"
          >
            View repositories
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
