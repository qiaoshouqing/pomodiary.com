import React from 'react'

import { Headline } from '~/app/(main)/Headline'
import { Photos } from '~/app/(main)/Photos'
import { Projects } from "~/app/(main)/projects/Projects"
import { Container } from '~/components/ui/Container'
import { getSettings } from '~/sanity/queries'

export default async function HomePage() {
    const settings = await getSettings()

    return (
        <>
            <Container className="mt-10">
                <Headline />
            </Container>

            {settings.heroPhotos && <Photos photos={settings.heroPhotos} />}

            <Container className="mt-24 md:mt-28">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
                        Projects
                    </h2>
                    <Projects />
                </div>
            </Container>
        </>
    )
}

export const revalidate = 60