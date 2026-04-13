import { createRootRoute, Outlet } from '@tanstack/react-router'
import { HeadContent, Scripts } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

import '../globals.css'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { title: 'Timothy Chen' },
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Timothy Chen — student and engineer.' },
        ],
        links: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    }),
    component: RootComponent,
    notFoundComponent: () => (
        <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Not found
        </div>
    ),
})

function RootComponent() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
    }, [dark])

    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <Outlet context={{ dark, setDark }} />
                <Scripts />
            </body>
        </html>
    )
}
