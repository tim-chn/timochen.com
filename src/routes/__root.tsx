import { createRootRoute, Outlet } from '@tanstack/react-router'
import { HeadContent, Scripts } from '@tanstack/react-router'

import '../globals.css'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { title: 'Timothy Chen' },
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Timothy Chen — student and engineer.' },
            { property: 'og:title', content: 'Timothy Chen' },
            { property: 'og:description', content: 'Student and engineer. Previously Amazon, Samsung.' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://timochen.com' },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: 'Timothy Chen' },
            { name: 'twitter:description', content: 'Student and engineer. Previously Amazon, Samsung.' },
        ],
        links: [{ rel: 'icon', href: 'data:,' }],
    }),
    component: RootComponent,
    notFoundComponent: () => (
        <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            Not found
        </div>
    ),
})

function RootComponent() {
    return (
        <html lang="en">
            <head>
                <HeadContent />
                {/* Prevent dark mode flash */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function(){try{if(localStorage.getItem('dark')==='true')document.documentElement.classList.add('dark')}catch(e){}})()`
                }} />
            </head>
            <body>
                <Outlet />
                <Scripts />
            </body>
        </html>
    )
}
