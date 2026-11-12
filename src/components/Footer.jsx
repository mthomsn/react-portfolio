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

// Keepy-uppy: click the ball before it drops. Miss and the count resets.
function KeepyUppy() {
    const [count, setCount] = useState(0);
    const [best, setBest] = useState(0);
    const [bounce, setBounce] = useState(0);
    const timer = useRef(null);

    useEffect(() => {
        try { setBest(Number(localStorage.getItem('keepy-best')) || 0); } catch (e) {}
        return () => clearTimeout(timer.current);
    }, []);

    const kick = () => {
        clearTimeout(timer.current);
        const next = count + 1;
        setCount(next);
        setBounce((b) => b + 1);
        if (next > best) {
            setBest(next);
            try { localStorage.setItem('keepy-best', String(next)); } catch (e) {}
        }
        timer.current = setTimeout(() => setCount(0), 1100);
    };

    return (
        <div className="keepy">
            <button className="ball" key={bounce} onClick={kick} aria-label="Juggle the soccer ball">
                ⚽
            </button>
            <span className="keepy-count">
                {count > 0 ? `${count} touch${count === 1 ? '' : 'es'}` : 'keepy-uppy?'}
                {best > 0 && <span className="muted"> · best {best}</span>}
            </span>
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
