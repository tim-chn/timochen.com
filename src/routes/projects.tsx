import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
    component: Projects,
})

function Projects() {
    return (
        <div style={{ maxWidth: '800px', margin: '4em auto', padding: '0 1.5em', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1em', color: 'var(--text)' }}>Projects — coming soon.</p>
            <Link to="/" style={{ color: 'var(--link)', fontSize: '0.9em' }}>← back</Link>
        </div>
    )
}
