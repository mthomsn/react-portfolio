import { Link } from 'react-router-dom';

// The picture part of a project tile. Uses the project's cover photos when it
// has them, and a stand-in otherwise.
export function TileArt({ project }) {
    const { cover, slug, chips } = project;

    if (cover.length >= 2) {
        return (
            <div className="art art-pair">
                {cover.slice(0, 2).map((c) => (
                    <img key={c.src} src={c.src} alt={c.alt} loading="lazy" />
                ))}
            </div>
        );
    }
    if (cover.length === 1) {
        return (
            <div className="art art-single">
                <img src={cover[0].src} alt={cover[0].alt} loading="lazy" />
            </div>
        );
    }
    if (slug === 'diotima') {
        return (
            <div className="art art-term" aria-hidden="true">
                <div className="term">
                    <div className="term-bar"><i /><i /><i /></div>
                    <pre>
{`$ dio new "how binary search avoids
  off-by-one errors"
session 7f3a… started
? What do you want out of this?
> stop guessing at mid + 1
…
── probe concluded ──`}
                    </pre>
                </div>
            </div>
        );
    }
    return (
        <div className="art art-placeholder">
            <span className="ph-label">FIGURE PENDING · photo not yet captured</span>
            {chips && (
                <span className="chips">
                    {chips.map((c) => <span key={c} className="chip">{c}</span>)}
                </span>
            )}
        </div>
    );
}

export default function Tile({ project, fig }) {
    return (
        <Link to={`/work/${project.slug}`} className="tile">
            <div className="tile-media">
                <TileArt project={project} />
            </div>
            <div className="tile-meta">
                <span className="fig-num">{fig}</span>
                <span className="tile-title">{project.title}</span>
                <span className="tile-cat">{project.category} · {project.year} →</span>
            </div>
        </Link>
    );
}
