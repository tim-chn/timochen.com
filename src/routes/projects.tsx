import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/src/components/Header'

export const Route = createFileRoute('/projects')({
    component: Projects,
})

const placeholders = [
    { title: 'Autonomous RC Car', desc: 'Computer vision and control systems for self-driving RC vehicles.' },
    { title: 'Plant Cell Detection', desc: 'Deep learning model for ecology and cell detection applications.' },
    { title: 'SSO Portal', desc: 'Single sign-on portal for Pepperdine University.' },
    { title: 'eSign Portal', desc: 'Document signing platform for Pepperdine University.' },
]

function Projects() {
    return (
        <>
            <Header />
            <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3em 1.5em 4em' }}>
                <div style={{ marginBottom: '2em' }}>
                    <h1 style={{ fontSize: '1.3em', fontWeight: 700, margin: '0 0 0.25em' }}>Projects</h1>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95em' }}>Work in progress — check back soon.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1em' }}>
                    {placeholders.map((p, i) => (
                        <div key={i} style={{
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            padding: '1.25em',
                            opacity: 0.45,
                            userSelect: 'none',
                            cursor: 'default',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em', marginBottom: '0.5em' }}>
                                <span style={{ fontSize: '0.8em' }}>🔒</span>
                                <strong style={{ fontSize: '0.95em' }}>{p.title}</strong>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.85em', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}
