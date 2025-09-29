'use client'

import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@/app/components/rich-text'
import { CMSIcon } from '@/app/components/cms-icon'

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            width={128}
            height={128}
            src={homeInfo.profilePicture.url}
            alt="Foto Guilherme Henrique"
            className="w-32 h-32 rounded-full object-cover mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">Guilherme Henrique</h1>
          <div className="text-zinc-400 max-w-2xl mb-8">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          
          <div className="flex items-center gap-4">
            {homeInfo.socials.map((contact, index) => (
              <a
                href={contact.url}
                key={`contact-${index}`}
                target="_blank"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <CMSIcon icon={contact.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {homeInfo.introTechs.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="inline-flex items-center" onClick={handleContact}>
            Contact Me <HiArrowNarrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
