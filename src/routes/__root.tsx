import { createRootRoute, Outlet } from '@tanstack/react-router'
import { HeadContent, Scripts } from '@tanstack/react-router'

import '../globals.css'

const siteTitle = 'Generic Professional Site'
const siteDescription = 'A generic professional profile template built with TanStack Start.'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { title: siteTitle },
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: siteDescription },
            { property: 'og:title', content: siteTitle },
            { property: 'og:description', content: siteDescription },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://example.com/' },
            { property: 'og:image', content: 'https://example.com/og-image.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: siteTitle },
            { name: 'twitter:description', content: siteDescription },
            { name: 'twitter:image', content: 'https://example.com/og-image.png' },
        ],
        links: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    }),
    component: RootComponent,
    notFoundComponent: () => (
        <div className="text-tw-ink-faded min-h-dvh flex items-center justify-center bg-tw-paper text-sm">
            Not found
        </div>
    ),
})

function RootComponent() {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body className="bg-tw-paper text-tw-ink font-mono min-h-dvh antialiased">
                <div className="relative isolate min-h-dvh">
                    <div className="paper-bg" aria-hidden />
                    <Outlet />
                </div>
                <Scripts />
            </body>
        </html>
    )
}
