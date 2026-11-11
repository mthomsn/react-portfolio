import injectorFace from './assets/injector_face.png';
import chamberMixing from './assets/chamber_mixing_3d.png';

const links = [
    { label: 'GitHub', href: 'https://github.com/mthomsn' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matt-thomsen-2814b3254/' },
    { label: 'Email', href: 'mailto:matthewthomsen99@gmail.com' },
];

function Project({ title, context, tools, children, note }) {
    return (
        <article className="project">
            <h3>{title}</h3>
            <p className="meta">
                {context} · {tools}
            </p>
            {children}
            {note && <p className="note">{note}</p>}
        </article>
    );
}

export default function App() {
    return (
        <main>
            <header>
                <h1>Matt Thomsen</h1>
                <p className="lede">
                    I'm a student at UT Dallas and a problem solver. I like taking a hard technical
                    problem apart until I understand it, whether that's a rocket engine injector
                    or a program written in C.
                </p>
                <p className="lede">Looking for a software engineering internship for summer 2027.</p>
                <nav>
                    {links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                            {l.label}
                        </a>
                    ))}
                </nav>
            </header>

            <section id="projects">
                <h2>Projects</h2>

                <Project
                    title="Injector and nozzle design tools"
                    context="Comet Rocketry, N2O/IPA liquid motor"
                    tools="Python, NumPy, Matplotlib"
                    note="Source repository will be public once the club approves sharing it."
                >
                    <p>
                        My part of the team's motor design: Python tools that size the injector, model
                        what the spray does in the chamber, and size a cold-flow test nozzle.
                    </p>
                    <ul>
                        <li>
                            Splits the motor's required flow area into unlike-doublet pairs, then sizes
                            hole diameters, jet angles and momentum ratio. The face is laid out with
                            extra drilled elements that can be plugged, so the flow can be tuned after
                            machining.
                        </li>
                        <li>
                            A reduced-order chamber model tracks droplet size, drag, vaporization
                            (d²-law), nitrous flashing, wall film and turbulent mixing, and estimates
                            mixing efficiency. It is meant for comparing injector layouts, not for
                            predicting absolute performance.
                        </li>
                        <li>
                            1-D isentropic sizing of a ½" pipe nozzle for a converging vs.
                            converging-diverging cold-flow demo, checking expansion against shop-air
                            pressure for flow separation.
                        </li>
                        <li>
                            Open items: discharge coefficients are assumed until cold-flow testing, and
                            the spray constants still need calibration against test data.
                        </li>
                    </ul>
                    <div className="figures">
                        <figure>
                            <img
                                src={injectorFace}
                                alt="Injector face layout with 12 drilled and 8 open doublet pairs"
                                loading="lazy"
                            />
                            <figcaption>Injector face layout, looking upstream from the chamber.</figcaption>
                        </figure>
                        <figure>
                            <img
                                src={chamberMixing}
                                alt="3D render of local oxidizer-to-fuel ratio through the chamber and nozzle"
                                loading="lazy"
                            />
                            <figcaption>Modeled local O/F ratio through the chamber and nozzle.</figcaption>
                        </figure>
                    </div>
                </Project>

                <Project
                    title="Competition robot control"
                    context="ASME Student Design Competition, team project"
                    tools="Python, Raspberry Pi, Bash"
                >
                    <p>
                        Control code for a remote-operated robot on a Raspberry Pi: drive and lift
                        motors, a sorting flipper and a servo, driven from a Bluetooth game controller.
                        I worked on the color sensor reading and classification over I²C, controller
                        input handling, status LEDs, and a startup script that reconnects the controller
                        at boot.
                    </p>
                </Project>

                <Project title="diotima" context="Personal project" tools="C11, POSIX threads">
                    <p>
                        A terminal app for guided study, based on an existing open-source learning
                        harness. It probes what you already know, plans a small dependency map toward a
                        goal, and keeps what you learn in a knowledge graph stored as JSON lines. It runs
                        a local language model CLI and serves its tools through a small MCP server it
                        implements itself. Plain C with a unit test suite and an end-to-end test script.
                    </p>
                </Project>
            </section>

            <section id="background">
                <h2>Background</h2>
                <dl>
                    <dt>Now</dt>
                    <dd>Student at UT Dallas; member of Comet Rocketry.</dd>
                    <dt>2022</dt>
                    <dd>University of Texas full-stack coding bootcamp.</dd>
                    <dt>2019–2022</dt>
                    <dd>
                        Operating room supply chain, St. David's Healthcare. Wrote my first automation
                        scripts there, which is how I got into programming.
                    </dd>
                </dl>
                <p className="meta">Languages: Python, C, Go, JavaScript.</p>
            </section>

            <footer>
                {links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                    </a>
                ))}
            </footer>
        </main>
    );
}
