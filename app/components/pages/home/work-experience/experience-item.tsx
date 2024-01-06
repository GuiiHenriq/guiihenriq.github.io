import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src="https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5"
            alt="Logo da Empresa"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/in/guilhermeerba/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ Compass.UOL
          </a>
          <h4 className="text-gray-300">Front-end Developer</h4>
          <span className="text-gray-500">
            out 2022 • O momento • (1 ano e 3 meses)
          </span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            unde saepe aut earum modi deleniti ex nulla et porro dicta veritatis
            totam, eius non facere sunt autem nisi obcaecati. Odit.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="AEM" />
          <TechBadge name="AEM" />
          <TechBadge name="AEM" />
          <TechBadge name="AEM" />
        </div>
      </div>
    </div>
  )
}
