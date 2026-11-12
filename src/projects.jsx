// Every project on the site lives here. The home grid, the /work page and each
// /work/<slug> case study are all built from this list.
//
// To add photos: drop them in src/assets, import them below, and add them to a
// project's `cover` (shown on the tile) or to a <Figure> inside a section.
//
// A good section to add to each project once you have it: "What didn't work".

import injectorFace from './assets/injector_face.png';
import chamberMixing from './assets/chamber_mixing_3d.png';
import gseDiagram from './assets/gse_diagram.png';

export function Figure({ src, alt, caption, wide }) {
    return (
        <figure className={wide ? 'fig fig-wide' : 'fig'}>
            <img src={src} alt={alt} loading="lazy" />
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}

export const categories = ['Rocketry', 'Robotics', 'Software'];

export const projects = [
    {
        slug: 'injector',
        title: 'Injector and nozzle design tools',
        subtitle: 'Sizing the injector for a student N2O/IPA liquid rocket motor.',
        category: 'Rocketry',
        year: '2026',
        tile: 'peach',
        cover: [
            { src: injectorFace, alt: 'Injector face layout with drilled and plugged doublet pairs' },
            { src: chamberMixing, alt: '3D plot of modeled O/F ratio through the chamber and nozzle' },
        ],
        overview:
            "My part of Comet Rocketry's liquid motor: Python tools that size the injector, model what the spray does in the chamber, and size a cold-flow test nozzle.",
        role: 'Injector design and analysis for the team motor.',
        stack: ['Python', 'NumPy', 'Matplotlib'],
        note: 'Source repository will be public once the club approves sharing it.',
        sections: [
            {
                id: 'injector-sizing',
                title: 'Injector sizing',
                body: (
                    <>
                        <p>
                            The tool splits the motor's required flow area into unlike-doublet pairs,
                            then sizes hole diameters, jet angles and momentum ratio. The face is laid
                            out with extra drilled elements that can be plugged, so the flow can be
                            tuned after machining.
                        </p>
                        <Figure
                            src={injectorFace}
                            alt="Injector face layout: 12 drilled pairs, 4 plugged, N2O and IPA holes marked"
                            caption="Injector face, looking upstream from the chamber. 12 pairs drilled, 4 plugged."
                        />
                    </>
                ),
            },
            {
                id: 'chamber-model',
                title: 'Chamber model',
                body: (
                    <>
                        <p>
                            A reduced-order model tracks droplet size, drag, vaporization (d²-law),
                            nitrous flashing, wall film and turbulent mixing, and estimates mixing
                            efficiency. It's meant for comparing injector layouts against each other,
                            not for predicting absolute performance.
                        </p>
                        <Figure
                            src={chamberMixing}
                            alt="3D render of local oxidizer-to-fuel ratio through the chamber and nozzle"
                            caption="Modeled local O/F through the chamber and nozzle. Orange is oxidizer-rich, blue is fuel-rich."
                        />
                    </>
                ),
            },
            {
                id: 'cold-flow-nozzle',
                title: 'Cold-flow nozzle',
                body: (
                    <p>
                        1-D isentropic sizing of a ½" pipe nozzle for a converging vs.
                        converging-diverging cold-flow demo, checking expansion against shop-air
                        pressure for flow separation.
                    </p>
                ),
            },
            {
                id: 'open-items',
                title: 'Open items',
                body: (
                    <ul>
                        <li>Discharge coefficients are assumed until cold-flow testing.</li>
                        <li>The spray constants still need calibration against test data.</li>
                    </ul>
                ),
            },
        ],
    },
    {
        slug: 'gse',
        title: 'Ground support equipment',
        subtitle: 'Loading nitrous and lighting the motor from a safe distance.',
        category: 'Rocketry',
        year: '2026',
        tile: 'blueprint',
        cover: [{ src: gseDiagram, alt: 'Schematic of two ESP32 boards linked over RS-485 driving a servo' }],
        overview:
            'Ground support equipment for the N2O/IPA motor: remote nitrous loading and remote ignition. Early development, and the repo is my working log.',
        role: 'Design, electronics and proof-of-concept firmware.',
        stack: ['C++', 'Arduino / ESP32', 'RS-485', 'KiCad'],
        links: [{ label: 'GitHub', href: 'https://github.com/mthomsn/gse' }],
        sections: [
            {
                id: 'problem',
                title: 'The problem',
                body: (
                    <p>
                        Nobody stands next to a motor full of nitrous. We need to load the oxidizer
                        remotely and start the motor remotely. Competition rules allow a wireless link
                        only if it's approved; a wired RJ45 connection is allowed no matter what, so
                        that's where I started.
                    </p>
                ),
            },
            {
                id: 'first-test',
                title: 'First test',
                body: (
                    <>
                        <p>
                            Loading comes first: one servo that lets N2O into the motor. I connected two
                            microcontrollers over an Ethernet cable using MAX485 transceivers and opened
                            and closed a small servo from the far end.
                        </p>
                        <Figure
                            src={gseDiagram}
                            alt="KiCad schematic: two Arduino Nano ESP32 boards, two MAX485 transceivers, a push button and a servo"
                            caption="The proof-of-concept link: button on one end, servo on the other, RS-485 in between."
                            wide
                        />
                    </>
                ),
            },
            {
                id: 'next',
                title: 'Next',
                body: (
                    <ul>
                        <li>Power for the real servos: they're 25 kg units that pull up to 3.3 A.</li>
                        <li>Keeping the servo power supply on the ground and connecting it through a pogo connector.</li>
                        <li>A LoRa module (SX1262, 915 MHz) to try in case wireless gets approved.</li>
                        <li>A proper schematic and, likely, a PCB for the onboard controls.</li>
                    </ul>
                ),
            },
        ],
    },
    {
        slug: 'robot',
        title: 'Color-sorting competition robot',
        subtitle: 'ASME Student Design Competition 2026, team UR@DC.',
        category: 'Robotics',
        year: '2026',
        tile: 'turf',
        cover: [],
        chips: ['Raspberry Pi Zero W', 'TCS34725', 'Xbox controller', '8 actuators'],
        overview:
            'A remote-operated robot that identifies the color of game objects and sorts them with a flipper, driven with an Xbox controller over Bluetooth.',
        role: 'Controller input, drive control, color detection and sorting, and the startup script. Built with Leigh Arriane Buendia, Jules Castel and other UR@DC teammates.',
        stack: ['Python', 'Raspberry Pi', 'I²C', 'Bash'],
        links: [{ label: 'GitHub', href: 'https://github.com/mthomsn/asme-sdc-robot' }],
        sections: [
            {
                id: 'controls',
                title: 'Controls',
                body: (
                    <p>
                        I wrote the controller input: reading the Xbox controller over Bluetooth and
                        mapping sticks and buttons to commands. I spent a while decoding the raw{' '}
                        <code>/dev/input</code> data before we switched to <code>jstest</code>. I also
                        wrote the drive motor control, including an early 3-wheel omnidirectional drive.
                    </p>
                ),
            },
            {
                id: 'color-sorting',
                title: 'Color sorting',
                body: (
                    <p>
                        A TCS34725 RGB sensor on I²C reads each game object. I wrote the classifier,
                        which works from normalized RGB and clear-channel readings, tuned it for the
                        competition colors, and tied it to the sorting flipper.
                    </p>
                ),
            },
            {
                id: 'startup',
                title: 'Startup',
                body: (
                    <p>
                        A boot script waits for Bluetooth, reconnects the controller, counts down and
                        starts the robot, so nobody needs a keyboard at the competition table.
                    </p>
                ),
            },
        ],
    },
    {
        slug: 'diotima',
        title: 'diotima',
        subtitle: 'A terminal app that teaches you one reasoning step at a time.',
        category: 'Software',
        year: '2026',
        tile: 'terminal',
        cover: [],
        overview:
            'A learning harness in C. It probes what you already know, plans a dependency map toward your goal, and keeps what you learn in a knowledge graph that later sessions read.',
        role: 'Personal project, after the open-source learnharness.',
        stack: ['C11', 'POSIX threads', 'cJSON', 'MCP'],
        links: [{ label: 'GitHub', href: 'https://github.com/mthomsn/diotima' }],
        sections: [
            {
                id: 'how-it-works',
                title: 'How it works',
                body: (
                    <>
                        <p>
                            <code>dio new "how binary search avoids off-by-one errors"</code> starts a
                            session. A prober asks graded questions until it knows where your
                            understanding runs out on each strand the topic depends on, skipping what
                            the graph says you already hold. Then it teaches, one step at a time.
                        </p>
                        <p>
                            Everything dio keeps is plain JSON lines under <code>~/.diotima</code>.
                            Practice sessions drill what the graph holds.
                        </p>
                    </>
                ),
            },
            {
                id: 'inside',
                title: 'Inside',
                body: (
                    <p>
                        The model is the local <code>claude</code> CLI; dio serves its tools to it
                        through a small loopback MCP server it implements itself. Plain C11 with a
                        vendored JSON parser, a unit test suite and an end-to-end test script.
                    </p>
                ),
            },
        ],
    },
];
