import { useState } from 'react';
import { Link } from 'react-router-dom';
import Chip from '../components/Chip';
import Tile from '../components/Tile';
import { projects } from '../projects';
import { features, pins, absMax, recommended, revisions, email, links } from '../site';

function H({ id, children }) {
    return <h2 id={id} className="sec">{children}</h2>;
}

export default function Home() {
    const [pin, setPin] = useState(null);

    return (
        <div className="sheet">
            <div className="title-block">
                <div>
                    <p className="title-part">MT-27</p>
                    <h1>Matt Thomsen</h1>
                    <p className="title-desc">Embedded and Propulsion Software Engineer, Student Grade</p>
                </div>
                <div className="title-actions">
                    <a className="btn btn-solid" href={`mailto:${email}`}>Contact</a>
                    {links.slice(1).map((l) => (
                        <a key={l.label} className="btn" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
                    ))}
                </div>
            </div>

            <section className="apps-top">
                <H id="applications">Typical Applications</H>
                <p className="lede">Each project has its own application report. Open one for the details.</p>
                <div className="grid">
                    {projects.map((p) => <Tile key={p.slug} project={p} />)}
                </div>
            </section>

            <div className="front">
                <section>
                    <H id="description">Description</H>
                    <div className="desc">
                        <p>
                            The MT-27 is a student engineer at UT Dallas who writes the software
                            behind rocket motors and robots. It sizes injectors for Comet Rocketry's
                            N2O/IPA liquid motor, builds the ground equipment that loads and fires it,
                            and wrote the color-sorting code for a competition robot.
                        </p>
                        <p>
                            The device breaks hard problems into pieces, tests ideas early, and learns
                            from what doesn't work. It was originally deployed in hospital supply chain,
                            where it first automated itself into programming.
                        </p>
                    </div>
                    <table className="devinfo">
                        <caption>Device information</caption>
                        <tbody>
                            <tr><th>Part number</th><td>MT-27</td></tr>
                            <tr><th>Package</th><td>UT Dallas · Dallas, TX</td></tr>
                            <tr><th>Status</th><td><span className="status-dot" />Seeking SWE internship, summer 2027</td></tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <H id="features">Features</H>
                    <ul className="features">{features.map((f) => <li key={f}>{f}</li>)}</ul>
                </section>
            </div>

            <section>
                <H id="pinout">Pin Configuration and Functions</H>
                <div className="pinout">
                    <div className="pkg-wrap">
                        <Chip active={pin} onHover={setPin} />
                        <div className="readout" aria-live="polite">
                            {pin ? (() => {
                                const p = pins.find((x) => x.n === pin);
                                return <><span className="ro-tag">PIN {p.n} · {p.name} · {p.io}</span>{p.desc}</>;
                            })() : <span className="ro-tag">Hover or tab to a pin</span>}
                        </div>
                    </div>
                    <table className="pintable">
                        <thead><tr><th>Pin</th><th>Name</th><th>I/O</th><th>Description</th></tr></thead>
                        <tbody>
                            {pins.map((p) => (
                                <tr key={p.n} className={`${pin === p.n ? 'on' : ''}${p.hot ? ' hot' : ''}`}
                                    onMouseEnter={() => setPin(p.n)} onMouseLeave={() => setPin(null)}>
                                    <td>{p.n}</td><td className="mono">{p.name}</td><td>{p.io}</td><td>{p.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <H id="specs">Specifications</H>
                <h3 className="sub">Absolute Maximum Ratings</h3>
                <table className="spec">
                    <thead><tr><th>Parameter</th><th>Max</th><th>Unit</th></tr></thead>
                    <tbody>{absMax.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody>
                </table>
                <h3 className="sub">Recommended Operating Conditions</h3>
                <table className="spec">
                    <thead><tr><th>Parameter</th><th>Min</th><th>Max</th><th>Unit</th></tr></thead>
                    <tbody>{recommended.map(([a, b, c, d]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td><td>{d}</td></tr>)}</tbody>
                </table>
            </section>

            <section>
                <H id="revisions">Revision History</H>
                <table className="spec revs">
                    <thead><tr><th>Rev</th><th>Date</th><th>Changes</th></tr></thead>
                    <tbody>{revisions.map((r) => <tr key={r.rev}><td className="mono">{r.rev}</td><td>{r.date}</td><td>{r.change}</td></tr>)}</tbody>
                </table>
            </section>

            <section>
                <H id="ordering">Ordering Information</H>
                <table className="spec">
                    <thead><tr><th>Orderable part</th><th>Status</th><th>Availability</th><th>Contact</th></tr></thead>
                    <tbody>
                        <tr>
                            <td className="mono">MT-27-INTERN-SU27</td>
                            <td><span className="badge">ACTIVE</span></td>
                            <td>Summer 2027 internship</td>
                            <td><a href={`mailto:${email}`}>Send email ↗</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}
