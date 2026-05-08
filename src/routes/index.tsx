import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { profile } from '@/src/content/profile'
import { Header } from '@/src/components/Header'
import { FileText } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Route = createFileRoute('/')({
    component: Home,
})

function renderParts(parts: typeof profile.highlights[number]['parts']) {
    return parts.map((part, i) => {
        if (typeof part === 'string') return <span key={i}>{part}</span>
        if (!part.href) return <strong key={i}>{part.text}</strong>
        return <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">{part.text}</a>
    })
}

function HighlightRow({ entry, index }: { entry: typeof profile.highlights[number]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
            { threshold: 0.1 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <div ref={ref} className="fade-in" style={{ transitionDelay: `${Math.min(index * 30, 300)}ms`, display: 'flex', gap: '1.25em', position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border)', border: '2px solid var(--text-muted)', marginTop: '0.45em', flexShrink: 0 }} />
                <div style={{ width: '1px', background: 'var(--border)', flex: 1, marginTop: '4px' }} />
            </div>
            {/* Content */}
            <div className="highlight-row" style={{ paddingBottom: '1em', flex: 1, display: 'block' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8em', fontWeight: 500, display: 'block', marginBottom: '0.15em' }}>
                    {entry.date}
                </span>
                <span style={{ fontSize: '0.95em' }}>
                    {renderParts(entry.parts)}
                </span>
            </div>
        </div>
    )
}

function Home() {
    const aboutRef = useRef<HTMLElement>(null)
    useEffect(() => {
        const el = aboutRef.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
            { threshold: 0.1 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <>
            <Header />
            <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5em 4em' }}>

                <section ref={aboutRef} className="fade-in" style={{ padding: '3em 0 2em', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1em', marginBottom: '0.75em' }}>
                        <img src="/IMG_6665.jpg" alt="Timothy Chen" style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 50%', flexShrink: 0 }} />
                        <div>
                            <h1 style={{ margin: '0 0 0.15em', fontSize: '1.4em', fontWeight: 700 }}>Timothy Chen</h1>
                            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95em' }}>
                                Currently @ <strong style={{ color: 'var(--text)' }}>Amazon</strong>
                            </p>
                        </div>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95em', lineHeight: 1.7 }}>
                        Hi, I'm Tim — a student and engineer. Let's connect at{' '}
                        <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                    </p>
                </section>

                <section style={{ paddingTop: '2em' }}>
                    <h2 style={{ fontSize: '0.75em', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5em' }}>
                        Highlights
                    </h2>
                    <div>
                        {profile.highlights.map((entry, i) => (
                            <HighlightRow key={i} entry={entry} index={i} />
                        ))}
                    </div>
                </section>
            </main>

            <footer style={{ borderTop: '1px solid var(--border)', padding: '1.5em', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25em', marginBottom: '0.5em' }}>
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}><FaLinkedin size={16} /></a>
                    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}><FaGithub size={16} /></a>
                    <a href={profile.contact.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}><FileText size={16} /></a>
                </div>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85em' }}>© 2026 Timothy Chen</p>
            </footer>
        </>
    )
}
