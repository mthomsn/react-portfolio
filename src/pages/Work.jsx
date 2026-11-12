import { useState } from 'react';
import Tile from '../components/Tile';
import { projects, categories } from '../projects';

export default function Work() {
    const [filter, setFilter] = useState('All');
    const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

    return (
        <div className="sheet">
            <h1 className="page-h">Applications</h1>
            <p className="subtitle">Application reports for the MT-27, by category.</p>
            <div className="filters" role="group" aria-label="Filter by category">
                {['All', ...categories].map((c) => {
                    const n = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length;
                    return (
                        <button key={c} className={filter === c ? 'btn btn-solid' : 'btn'} onClick={() => setFilter(c)} aria-pressed={filter === c}>
                            {c} ({n})
                        </button>
                    );
                })}
            </div>
            <div className="grid">
                {shown.map((p) => <Tile key={p.slug} project={p} fig={`MT27-AR-${String(projects.indexOf(p) + 1).padStart(2, '0')}`} />)}
            </div>
        </div>
    );
}
