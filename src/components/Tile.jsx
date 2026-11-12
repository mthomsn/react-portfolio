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

// A card: picture in an inset panel, the title and one-line summary, then a row
// of tags so a skimmer sees the category and stack without opening it.
export default function Tile({ project }) {
    const { slug, title, subtitle, category, year, stack } = project;
    return (
        <Link to={`/work/${slug}`} className="tile">
            <div className="tile-media">
                <TileArt project={project} />
            </div>
            <div className="tile-meta">
                <span className="tile-title">{title}</span>
                <span className="tile-sub">{subtitle}</span>
            </div>
            <div className="tile-tags">
                <span className="tag tag-cat">{category}</span>
                {stack.slice(0, 2).map((s) => <span key={s} className="tag">{s}</span>)}
                <span className="tile-year">{year}</span>
                <span className="tile-go" aria-hidden="true">→</span>
            </div>
        </Link>
    );
}
