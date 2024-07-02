import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = 'Projects'
const description =
  'These projects vary - some have had a great deal of effort poured into them, some are practical, while others are novel and interesting.' +
    'This also serves as proof that we are always on the journey.'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          My adventures in past projects.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          These projects vary - some have had <b>a great deal of effort</b> poured into them, some are <b>practical</b>, while others are <b>novel and interesting</b>.
          This also serves as proof that we are always on the journey.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
