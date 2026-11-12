import { pins } from '../site';

// A 16-pin DIP package drawn in SVG. Pins 1–8 down the left, 9–16 up the right.
// `active` / `onHover` keep it in sync with the pin table.
export default function Chip({ active, onHover }) {
    const W = 560, H = 420, bodyX = 200, bodyW = 160, top = 40, pitch = 44;
    const left = pins.slice(0, 8);
    const right = pins.slice(8).reverse(); // 16 at top … 9 at bottom

    const Pin = ({ p, i, side }) => {
        const y = top + 22 + i * pitch;
        const on = active === p.n;
        const x1 = side === 'L' ? bodyX - 46 : bodyX + bodyW;
        const cls = `pin${on ? ' on' : ''}${p.hot ? ' hot' : ''}`;
        return (
            <g className={cls} onMouseEnter={() => onHover(p.n)} onMouseLeave={() => onHover(null)}
               onFocus={() => onHover(p.n)} onBlur={() => onHover(null)} tabIndex={0} role="button"
               aria-label={`Pin ${p.n} ${p.name}: ${p.desc}`}>
                <rect x={x1} y={y - 8} width={46} height={16} className="lead" />
                <text x={side === 'L' ? bodyX - 54 : bodyX + bodyW + 54} y={y + 4}
                      textAnchor={side === 'L' ? 'end' : 'start'} className="pin-name">{p.name}</text>
                <text x={side === 'L' ? bodyX + 10 : bodyX + bodyW - 10} y={y + 4}
                      textAnchor={side === 'L' ? 'start' : 'end'} className="pin-num">{p.n}</text>
            </g>
        );
    };

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="pkg" role="img" aria-label="MT-27 pinout, 16-pin DIP, top view">
            <rect x={bodyX} y={top} width={bodyW} height={8 * pitch} className="body" />
            <path d={`M${bodyX + bodyW / 2 - 14} ${top} a14 14 0 0 0 28 0`} className="notch" />
            <circle cx={bodyX + 22} cy={top + 22} r={4} className="pin1dot" />
            <text x={bodyX + bodyW / 2} y={top + 4 * pitch - 6} textAnchor="middle" className="chip-label">MT-27</text>
            <text x={bodyX + bodyW / 2} y={top + 4 * pitch + 16} textAnchor="middle" className="chip-sub">UTD · 2027</text>
            {left.map((p, i) => <Pin key={p.n} p={p} i={i} side="L" />)}
            {right.map((p, i) => <Pin key={p.n} p={p} i={i} side="R" />)}
            <text x={W / 2} y={H - 6} textAnchor="middle" className="chip-caption">N PACKAGE · 16-PIN PDIP · TOP VIEW</text>
        </svg>
    );
}
