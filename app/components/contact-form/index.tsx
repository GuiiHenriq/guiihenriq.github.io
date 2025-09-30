'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '../button'
import { SectionTitle } from '../section-title'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Message sent successfully!')
      reset()
    } catch {
      toast.error('Error sending your message, please try again!')
    }
  }

  return (
    <section id="contact" className="py-16 container">
      <div className="w-full max-w-[420px] mx-auto">
        <h2 className="text-2xl font-display text-center mb-2">get in touch</h2>
        <p className="text-zinc-400 text-center mb-8">
          Let&apos;s work together!
        </p>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full h-12 bg-zinc-800/50 rounded-lg placeholder:text-zinc-400 text-zinc-100 p-4 focus:outline-none focus:ring-2 ring-zinc-600 border border-zinc-700"
            {...register('name')}
          />

          <input
            type="text"
            placeholder="E-mail"
            className="w-full h-12 bg-zinc-800/50 rounded-lg placeholder:text-zinc-400 text-zinc-100 p-4 focus:outline-none focus:ring-2 ring-zinc-600 border border-zinc-700"
            {...register('email')}
          />

          <textarea
            placeholder="Message"
            maxLength={500}
            className="resize-none w-full h-[138px] bg-zinc-800/50 rounded-lg placeholder:text-zinc-400 text-zinc-100 p-4 focus:outline-none focus:ring-2 ring-zinc-600 border border-zinc-700"
            {...register('message')}
          />

          <Button className="w-max mx-auto mt-6" disabled={isSubmitting}>
            Send message <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
