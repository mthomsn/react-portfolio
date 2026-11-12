import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../projects';
import NotFound from './NotFound';
import { TileArt } from '../components/Tile';

export default function Project() {
    const { slug } = useParams();
    const i = projects.findIndex((p) => p.slug === slug);
    const p = projects[i];
    const [active, setActive] = useState('overview');

    const toc = p ? [{ id: 'overview', title: 'Overview' }, ...p.sections] : [];

    // Highlight the section you're reading in the sidebar.
    useEffect(() => {
        if (!p) return;
        const els = toc.map((s) => document.getElementById(s.id)).filter(Boolean);
        const io = new IntersectionObserver(
            (entries) => {
                const vis = entries.filter((e) => e.isIntersecting);
                if (vis.length) setActive(vis[0].target.id);
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

    if (!p) return <NotFound />;
    const next = projects[(i + 1) % projects.length];

    return (
        <div className="case">
            <aside className="toc">
                <Link to="/work" className="toc-back">← Applications</Link>
                <p className="toc-head">Contents</p>
                <ol>
                    {toc.map((s) => (
                        <li key={s.id}>
                            <a href={`#${s.id}`} className={active === s.id ? 'on' : ''}
                               onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                                {s.title}
                            </a>
                        </li>
                    ))}
                </ol>
            </aside>

            <article className="case-body">
                <p className="report-kind">Application Report · {p.category}</p>
                <h1>{p.title}</h1>
                <p className="subtitle">{p.subtitle}</p>

                <div className="case-hero">
                    <TileArt project={p} />
                </div>

                <section id="overview" className="abstract">
                    <h2 className="sec">Abstract</h2>
                    <p>{p.overview}</p>
                    <table className="spec">
                        <tbody>
                            <tr><th>Role</th><td>{p.role}</td></tr>
                            <tr><th>Stack</th><td><span className="chips">{p.stack.map((x) => <span key={x} className="chip">{x}</span>)}</span></td></tr>
                            <tr><th>Category</th><td>{p.category} · {p.year}</td></tr>
                            {p.links && <tr><th>Source</th><td>{p.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}</td></tr>}
                            {p.note && <tr><th>Note</th><td>{p.note}</td></tr>}
                        </tbody>
                    </table>
                </section>

                {p.sections.map((x) => (
                    <section key={x.id} id={x.id} className="case-section">
                        <h2 className="sec">{x.title}</h2>
                        <div className="prose">{x.body}</div>
                    </section>
                ))}

                <Link to={`/work/${next.slug}`} className="next">
                    <span className="report-kind">Next application report</span>
                    <span className="next-title">{next.title} →</span>
                </Link>
            </article>
        </div>
    );
}
