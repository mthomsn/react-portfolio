import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { links, email } from '../site';

function getTheme() {
    const set = document.documentElement.dataset.theme;
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ThemeToggle() {
    const [theme, setTheme] = useState('light');
    useEffect(() => setTheme(getTheme()), []);

    const choose = (t) => {
        document.documentElement.dataset.theme = t;
        try { localStorage.setItem('theme', t); } catch (e) {}
        setTheme(t);
    };

    return (
        <div className="segmented" role="group" aria-label="Color theme">
            {['light', 'dark'].map((t) => (
                <button key={t} className={theme === t ? 'on' : ''} onClick={() => choose(t)} aria-pressed={theme === t}>
                    {t === 'light' ? 'Light' : 'Dark'}
                </button>
            ))}
        </div>
    );
}

// Keepy-uppy: click the ball to kick it up, and again before it lands. Where you
// hit it sets which way it drifts. A little MCU board counts touches on a
// 7-segment display and blinks its TX LED on every kick.
const G = 650;       // gravity, px/s² (low, so the ball hangs in the air)
const BALL = 34;     // ball size, px
const H = 190;       // field height, px

// Which segments light up for each character.
const SEG = { 0: 'abcdef', 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg', '-': 'g', ' ': '' };
const SEG_RECTS = { a: [3, 0, 8, 2], b: [11, 2, 2, 9], c: [11, 13, 2, 9], d: [3, 22, 8, 2], e: [1, 13, 2, 9], f: [1, 2, 2, 9], g: [3, 11, 8, 2] };

function Digit({ ch, x }) {
    const on = SEG[ch] ?? '';
    return (
        <g transform={`translate(${x} 0) skewX(-6)`}>
            {Object.entries(SEG_RECTS).map(([id, [rx, ry, w, h]]) => (
                <rect key={id} x={rx} y={ry} width={w} height={h} rx="1" className={on.includes(id) ? 'seg on' : 'seg'} />
            ))}
        </g>
    );
}

function Board({ count, best, blink, fault }) {
    const text = fault ? '---' : String(Math.min(count, 999)).padStart(3, ' ');
    return (
        <svg className="mcu" viewBox="0 0 220 130" role="img" aria-label={`Touch counter reads ${count}. Best ${best}.`}>
            <rect x="1" y="1" width="218" height="128" rx="6" className="pcb" />
            {[10, 210].map((cx) => [10, 120].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" className="hole" />))}
            {/* traces from the MCU to the display */}
            {[0, 1, 2, 3].map((i) => <path key={i} d={`M74 ${48 + i * 8} H96 V${36 + i * 6} H118`} className="trace" />)}
            {/* MCU */}
            <g transform="translate(22 36)">
                {[0, 1, 2, 3, 4].map((i) => (
                    <g key={i}>
                        <rect x="-6" y={4 + i * 9} width="6" height="3" className="lead" />
                        <rect x="52" y={4 + i * 9} width="6" height="3" className="lead" />
                    </g>
                ))}
                <rect width="52" height="50" rx="2" className="ic" />
                <circle cx="7" cy="7" r="2" className="ic-dot" />
                <text x="26" y="29" className="ic-label">MT-27</text>
            </g>
            {/* 7-segment display */}
            <rect x="118" y="26" width="80" height="44" rx="3" className="disp" />
            <g transform="translate(130 36)">
                {[...text].map((ch, i) => <Digit key={i} ch={ch} x={i * 19} />)}
            </g>
            <text x="158" y="84" className="silk">TOUCHES</text>
            {/* LEDs */}
            <circle key={blink} cx="132" cy="104" r="4" className={blink ? 'led tx flash' : 'led tx'} />
            <text x="140" y="107" className="silk silk-l">TX</text>
            <circle cx="170" cy="104" r="4" className={fault ? 'led fault on' : 'led fault'} />
            <text x="178" y="107" className="silk silk-l">DROP</text>
            <text x="22" y="104" className="silk silk-l">BEST {best}</text>
            <text x="22" y="22" className="silk silk-l">U1</text>
        </svg>
    );
}

function KeepyUppy() {
    const [count, setCount] = useState(0);
    const [best, setBest] = useState(0);
    const [blink, setBlink] = useState(0);
    const [fault, setFault] = useState(false);
    const field = useRef(null);
    const ball = useRef(null);
    const raf = useRef(0);
    const faultTimer = useRef(null);
    const s = useRef({ x: 0, y: 0, vx: 0, vy: 0, rot: 0, live: false, last: 0, w: 300 });
    const countRef = useRef(0);

    const draw = () => {
        const b = s.current;
        if (ball.current) ball.current.style.transform = `translate(${b.x}px, ${-b.y}px) rotate(${b.rot}deg)`;
    };

    useEffect(() => {
        try { setBest(Number(localStorage.getItem('keepy-best')) || 0); } catch (e) {}
        const measure = () => {
            if (!field.current) return;
            const w = field.current.clientWidth;
            const b = s.current;
            if (!b.w || b.x === 0) b.x = (w - BALL) / 2;
            b.w = w;
            b.x = Math.min(b.x, w - BALL);
            draw();
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (field.current) ro.observe(field.current);
        return () => { ro.disconnect(); cancelAnimationFrame(raf.current); clearTimeout(faultTimer.current); };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const drop = () => {
        countRef.current = 0;
        setCount(0);
        setFault(true);
        clearTimeout(faultTimer.current);
        faultTimer.current = setTimeout(() => setFault(false), 1200);
    };

    const step = (t) => {
        const b = s.current;
        const dt = Math.min(0.032, (t - b.last) / 1000);
        b.last = t;
        const maxX = b.w - BALL;

        if (b.y > 0 || b.vy > 0) {
            b.vy -= G * dt;
            b.y += b.vy * dt;
            b.rot += b.vx * dt * 3;
            if (b.y > H - BALL) { b.y = H - BALL; b.vy = Math.min(b.vy, 0); }
            if (b.y <= 0) {
                b.y = 0;
                if (b.live) { b.live = false; drop(); }
                if (-b.vy > 140) { b.vy = -b.vy * 0.38; b.vx *= 0.7; } else { b.vy = 0; }
            }
        } else {
            // rolling on the ground
            b.vx *= Math.pow(0.15, dt);
            b.rot += ((b.vx * dt) / (BALL / 2)) * 57.3;
        }
        b.x += b.vx * dt;
        if (b.x < 0) { b.x = 0; b.vx = -b.vx * 0.6; }
        if (b.x > maxX) { b.x = maxX; b.vx = -b.vx * 0.6; }

        draw();
        if (b.y === 0 && b.vy === 0 && Math.abs(b.vx) < 4) { b.vx = 0; raf.current = 0; return; }
        raf.current = requestAnimationFrame(step);
    };

    // offset: -1 (hit on the left edge) to 1 (right edge)
    const kick = (offset) => {
        const b = s.current;
        b.vy = 400 + Math.random() * 40;
        b.vx = -offset * 110 + (Math.random() - 0.5) * 40;
        b.live = true;
        const next = countRef.current + 1;
        countRef.current = next;
        setCount(next);
        setBlink((k) => k + 1);
        setFault(false);
        if (next > best) {
            setBest(next);
            try { localStorage.setItem('keepy-best', String(next)); } catch (e) {}
        }
        if (!raf.current) {
            b.last = performance.now();
            raf.current = requestAnimationFrame(step);
        }
    };

    const onPointerDown = (e) => {
        e.preventDefault();
        const r = e.currentTarget.getBoundingClientRect();
        kick(Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2))));
    };

    return (
        <div className="keepy">
            <div className="field" ref={field} style={{ height: H }}>
                <button
                    ref={ball}
                    className="ball"
                    onPointerDown={onPointerDown}
                    onClick={(e) => { if (e.detail === 0) kick(0); }}
                    aria-label="Kick the soccer ball"
                >
                    ⚽
                </button>
                <span className="field-hint">{count > 0 ? '' : 'click the ball'}</span>
            </div>
            <Board count={count} best={best} blink={blink} fault={fault} />
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-row">
                <a href={`mailto:${email}?subject=MT-27%20datasheet%20feedback`}>Submit Document Feedback</a>
                <span className="muted">Copyright © {new Date().getFullYear()} Matt Thomsen</span>
                <span className="footer-right">
                    <ThemeToggle />
                    <button className="link-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top ↑</button>
                </span>
            </div>
            <div className="footer-row">
                <span className="footer-links">
                    <span className="muted">Product Folder Links:</span>
                    {links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    ))}
                    <Link to="/off-the-clock">Off the clock</Link>
                </span>
                <span className="muted">Built by Matt between classes, cold-flow tests and soccer · Last updated {__BUILD_DATE__}</span>
            </div>
            <figure className="keepy-fig">
                <KeepyUppy />
                <figcaption>Keepy-uppy test fixture</figcaption>
            </figure>
        </footer>
    );
}
