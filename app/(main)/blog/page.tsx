// import Balancer from 'react-wrap-balancer'

// import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  'Here I will tell the story behind the product and our entrepreneurial experience.'
export const metadata = {
  title: 'My Blog',
  description,
  openGraph: {
    title: 'My Blog',
    description,
  },
  twitter: {
    title: 'My Blog',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Welcome to my blog
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          {/*<Balancer>{description}</Balancer>*/}
          I like this passage very much.
          <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-4">
            <p className="text-zinc-500 dark:text-zinc-500">I was surprised, as always, that how easy it was to leave—how good it felt to be gone, to be on the move, to be someplace where I had never been before and where I was never going to be again.
            </p>
            <footer className="text-zinc-500 dark:text-zinc-500">- John Krakauer, Into the Wild.</footer>
          </blockquote>
          These are proof that we are on the road.
        </p>
        {/*<p className="flex items-center">*/}
        {/*  <SocialLink href="/feed.xml" platform="rss" />*/}
        {/*</p>*/}
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60
