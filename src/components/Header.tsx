import { Link, useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { profile } from '@/src/content/profile'

function useDark() {
    const [dark, setDarkState] = useState(false)

    useEffect(() => {
        setDarkState(document.documentElement.classList.contains('dark'))
    }, [])

    function setDark(val: boolean) {
        setDarkState(val)
        document.documentElement.classList.toggle('dark', val)
        try { localStorage.setItem('dark', String(val)) } catch {}
    }

    return [dark, setDark] as const
}

export function Header() {
    const [dark, setDark] = useDark()
    const { pathname } = useLocation()

    const navLink = (active: boolean): React.CSSProperties => ({
        textDecoration: 'none',
        color: active ? 'var(--text)' : 'var(--text-muted)',
        fontSize: '0.9em',
        fontWeight: 500,
        pointerEvents: active ? 'none' : 'auto',
    })

    return (
        <header className="site-header">
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5em', display: 'flex', alignItems: 'center', height: '56px', gap: '1.5em' }}>
                <Link to="/" style={{ fontWeight: 700, fontSize: '1em', marginRight: 'auto', textDecoration: 'none', color: 'var(--text)' }}>
                    timochen.com
                </Link>
                <Link to="/" style={navLink(pathname === '/')}>about</Link>
                <Link to="/projects" style={navLink(pathname === '/projects')}>projects</Link>
                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" style={navLink(false)}>linkedin</a>
                <a href={profile.contact.resume} target="_blank" rel="noopener noreferrer" style={navLink(false)}>resume</a>
                <button
                    onClick={() => setDark(!dark)}
                    aria-label="Toggle dark mode"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', padding: '4px', color: 'var(--text-muted)' }}
                >
                    {dark ? '○' : '●'}
                </button>
            </div>
        </header>
    )
}
