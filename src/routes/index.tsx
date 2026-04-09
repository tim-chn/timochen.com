import { createFileRoute } from '@tanstack/react-router'

import { profile } from '@/src/content/profile'

export const Route = createFileRoute('/')({
    component: Home,
})

const linkClass =
    'text-tw-ribbon hover:text-tw-ribbon-bright focus-visible:ring-tw-ribbon rounded underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none'

function Home() {
    return (
        // pt-6 = 24px — first multiple of the 24px grid unit
        <main className="relative z-10 mx-auto max-w-2xl px-5 pb-12 pt-6 md:px-6">
            {/* h1 + mb-6 = 24+24 = 48px; headline + mb-6 = 24+24 = 48px
                h2   + mb-6 = 24+24 = 48px
                Total before list = 24+48+48+48 = 168px = 7×24 ✓ */}
            <header>
                <h1 className="text-tw-ink text-2xl font-bold leading-6 mb-6">
                    {profile.name}
                </h1>
                <p className="typewriter text-tw-ink-faded text-sm leading-6 mb-6">
                    {profile.headline}
                </p>
            </header>

            <section id="highlights" aria-labelledby="highlights-heading">
                <h2
                    id="highlights-heading"
                    className="tw-heading-rule text-tw-ink text-xs font-bold uppercase tracking-widest leading-6 mb-6"
                >
                    Highlights
                </h2>
                <ul>
                    {profile.highlights.map((entry, i) => (
                        <li
                            key={i}
                            className="entry-line grid grid-cols-[5rem_1fr] gap-x-3 border-b border-tw-rule last:border-b-0"
                            style={{ '--i': i } as React.CSSProperties}
                        >
                            <span className="text-tw-ink font-bold tabular-nums text-xs leading-6 shrink-0">
                                [{entry.date}]
                            </span>
                            <span className="text-tw-ink-faded text-xs leading-6">
                                {entry.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className="flex flex-wrap gap-x-5 gap-y-0 text-xs leading-6 mt-6">
                <a href={`mailto:${profile.contact.email}`} className={linkClass}>
                    {profile.contact.email}
                </a>
                <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                >
                    LinkedIn
                </a>
                <a
                    href={profile.contact.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                >
                    Resume
                </a>
            </footer>
        </main>
    )
}
