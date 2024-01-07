'use client'

import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/GuiiHenriq',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/guilhermeerba/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://www.linkedin.com/in/guilhermeerba/',
    icon: <TbBrandWhatsapp />,
  },
  {
    url: 'https://www.linkedin.com/in/guilhermeerba/',
    icon: <TbBrandYoutube />,
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Hi, my name is</p>
          <h2 className="text-4xl font-medium mt-2">Guilherme Henrique</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            My story with programming started around the year 2010. I had been
            exploring the world of programming for fun since I was 10 years old
            by creating a blog, websites in HTML and CSS, developing a form
            system in PHP and several other projects.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="NextJSS" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Talk To Me <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex items-center h-20 gap-3 text-2xl text-gray-600">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto Guilherme Henrique"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
