import { Link, useLocation } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

function useDark() {
    const [dark, setDarkState] = useState(false)

    useEffect(() => {
        setDarkState(localStorage.getItem('dark') !== 'false')
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
                <Link to="/" className="nav-link" style={navLink(pathname === '/')}>about</Link>
                <Link to="/projects" className="nav-link" style={navLink(pathname === '/projects')}>projects</Link>
                <button
                    onClick={() => setDark(!dark)}
                    aria-label="Toggle dark mode"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                >
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </div>
        </header>
    )
}
