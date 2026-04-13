import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { profile } from '@/src/content/profile'

export const Route = createFileRoute('/')(({
    component: Home,
}))

function ThemeToggle({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
    return (
        <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            style={{
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                color: 'var(--text)',
            }}
        >
            {dark ? '☀️' : '🌙'}
        </button>
    )
}

function renderParts(parts: typeof profile.highlights[number]['parts']) {
    return parts.map((part, i) => {
        if (typeof part === 'string') return <span key={i}>{part}</span>
        if (!part.href) return <strong key={i}>{part.text}</strong>
        return (
            <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
                {part.text}
            </a>
        )
    })
}

function Home() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
    }, [dark])

    const s = {
        page: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 1.5em',
        } as React.CSSProperties,
        header: {
            padding: '1.5em 1.5em',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '1em',
        },
        h1: {
            margin: 0,
            fontSize: '1.4em',
            fontWeight: 700,
            color: 'var(--text)',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: '1em',
        },
        navLink: {
            textDecoration: 'none',
            color: 'var(--link)',
            fontSize: '1em',
        },
        section: {
            marginTop: '2em',
        },
        aboutContent: {
            display: 'flex',
            alignItems: 'center',
            gap: '1.5em',
            flexWrap: 'wrap' as const,
        },
        photo: {
            width: '180px',
            height: '180px',
            borderRadius: '8px',
            objectFit: 'cover' as const,
            objectPosition: '15% 70%',
            flexShrink: 0,
        },
        h2: {
            fontSize: '1.2em',
            borderBottom: '2px solid var(--border)',
            paddingBottom: '0.3em',
            marginTop: '1.5em',
            marginBottom: '1em',
        },
        workItem: {
            margin: '0.5em 0',
            fontSize: '1em',
            color: 'var(--text)',
        },
        footer: {
            textAlign: 'center' as const,
            padding: '2em 0 1em',
            marginTop: '2em',
            borderTop: '1px solid var(--border)',
        },
        footerLinks: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2em',
            marginBottom: '0.5em',
        },
        footerLink: {
            color: 'var(--link)',
            textDecoration: 'none',
            fontSize: '1em',
        },
        muted: {
            color: 'var(--text-muted)',
            fontSize: '0.9em',
        },
    }

    return (
        <>
            <header style={s.header}>
                <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                    <h1 style={s.h1}>Timothy Chen</h1>
                    <nav style={s.nav}>
                        <a href="/" style={s.navLink}>about</a>
                        <Link to="/projects" style={s.navLink}>projects</Link>
                        <ThemeToggle dark={dark} setDark={setDark} />
                    </nav>
                </div>
            </header>

            <main style={s.page}>
                <section id="about" style={s.section}>
                    <div style={s.aboutContent}>
                        <img src="/me.JPEG" alt="Timothy Chen" style={s.photo} />
                        <div>
                            <p style={{ margin: 0 }}>
                                Hi, I'm Tim, a student and engineer.
                                <br /><br />
                                Let's connect! Reach me at{' '}
                                <a href={`mailto:${profile.contact.email}`}>
                                    {profile.contact.email}
                                </a>.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="highlights" style={s.section}>
                    <h2 style={s.h2}>Highlights</h2>
                    <div>
                        {profile.highlights.map((entry, i) => (
                            <div key={i} style={s.workItem}>
                                <strong>[{entry.date}]</strong>{' '}
                                {renderParts(entry.parts)}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer style={s.footer}>
                <div style={s.footerLinks}>
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" style={s.footerLink}>
                        LinkedIn
                    </a>
                    <a href={profile.contact.resume} target="_blank" rel="noopener noreferrer" style={s.footerLink}>
                        Resume
                    </a>
                </div>
                <p style={s.muted}>© 2025 Timothy Chen</p>
            </footer>
        </>
    )
}
