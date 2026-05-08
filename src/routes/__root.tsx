import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { HeadContent, Scripts } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

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
    const { pathname } = useLocation()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.style.transition = 'none'
        el.style.opacity = '0'
        el.style.transform = 'translateY(6px)'
        requestAnimationFrame(() => requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
        }))
    }, [pathname])

    return (
        <html lang="en">
            <head>
                <HeadContent />
                {/* Prevent dark mode flash */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function(){try{var d=localStorage.getItem('dark');if(d===null||d==='true')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})()`
                }} />
            </head>
            <body>
                <div ref={ref}>
                    <Outlet />
                </div>
                <Scripts />
            </body>
        </html>
    )
}
