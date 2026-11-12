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

// Board layout, in SVG units. Every trace starts at the centre of an MCU pin
// and ends on a pad at the left edge of a display.
const MCU = { x: 24, y: 45, w: 50, h: 60 };
const PIN_Y = [51, 63, 75, 87, 99];                       // pin centres, both sides
const DISP = { x: 150, w: 86, h: 40, touches: 22, best: 88 };
// [pin y, bend x, pad y]: the outer trace of each pair bends first so they never cross.
const TRACES = [[51, 100, 36], [63, 112, 48], [99, 100, 114], [87, 112, 102]];

function Display({ y, text, label }) {
    const digitsW = 14 + 2 * 22;
    const x0 = DISP.x + (DISP.w - digitsW) / 2;
    return (
        <g>
            <text x={DISP.x + DISP.w / 2} y={y - 5} className="silk">{label}</text>
            <rect x={DISP.x} y={y} width={DISP.w} height={DISP.h} rx="3" className="disp" />
            <g transform={`translate(${x0} ${y + 8})`}>
                {[...text].map((ch, i) => <Digit key={i} ch={ch} x={i * 22} />)}
            </g>
        </g>
    );
}

function Board({ count, best, blink, fault }) {
    const three = (n) => String(Math.min(n, 999)).padStart(3, ' ');
    const right = MCU.x + MCU.w;
    return (
        <svg className="mcu" viewBox="0 0 260 150" role="img" aria-label={`Touch counter reads ${count}. Best ${best}.`}>
            <rect x="1" y="1" width="258" height="148" rx="6" className="pcb" />
            {[[9, 9], [251, 9], [9, 141], [251, 141]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" className="hole" />)}

            {/* traces, drawn first so pins and pads sit on top */}
            {TRACES.map(([py, bx, dy]) => (
                <path key={py} d={`M${right + 3} ${py} H${bx} V${dy} H${DISP.x}`} className="trace" />
            ))}
            <path d={`M${right + 3} 75 H92`} className="trace" />
            <circle cx="92" cy="75" r="2.6" className="via" />
            {TRACES.map(([, , dy]) => <rect key={dy} x={DISP.x - 4} y={dy - 2} width="5" height="4" className="pad" />)}

            {/* MCU */}
            {PIN_Y.map((py) => (
                <g key={py}>
                    <rect x={MCU.x - 6} y={py - 1.5} width="6" height="3" className="lead" />
                    <rect x={right} y={py - 1.5} width="6" height="3" className="lead" />
                </g>
            ))}
            <rect x={MCU.x} y={MCU.y} width={MCU.w} height={MCU.h} rx="2" className="ic" />
            <circle cx={MCU.x + 7} cy={MCU.y + 7} r="2" className="ic-dot" />
            <text x={MCU.x + MCU.w / 2} y={MCU.y + MCU.h / 2 + 3} className="ic-label">MT-27</text>
            <text x={MCU.x} y={MCU.y + MCU.h + 14} className="silk silk-l">U1</text>

            {/* LEDs */}
            <circle key={blink} cx="26" cy="22" r="4" className={blink ? 'led tx flash' : 'led tx'} />
            <text x="33" y="25" className="silk silk-l">TX</text>
            <circle cx="60" cy="22" r="4" className={fault ? 'led fault on' : 'led fault'} />
            <text x="67" y="25" className="silk silk-l">DROP</text>

            <Display y={DISP.touches} text={fault ? '---' : three(count)} label="TOUCHES" />
            <Display y={DISP.best} text={three(best)} label="BEST" />
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
        const dt = Math.max(0, Math.min(0.032, (t - b.last) / 1000)); // first frame can be stamped before the kick
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
