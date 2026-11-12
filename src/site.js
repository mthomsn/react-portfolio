// Things you'll edit by hand most often.

export const email = 'matthewthomsen99@gmail.com';

export const links = [
    { label: 'Email', href: `mailto:${email}` },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matt-thomsen-2814b3254/' },
    { label: 'GitHub', href: 'https://github.com/mthomsn' },
];

// Bump these when you make a real change to the site.
export const doc = { number: 'MT27-DS', rev: 'C', date: 'NOVEMBER 2026' };

// 1 Features
export const features = [
    'Writes the software behind a student N2O/IPA liquid rocket motor',
    'Embedded interfaces: I²C, RS-485, Bluetooth, PWM',
    'Python, C, Go and JavaScript',
    'Breaks hard problems into pieces; tests ideas early',
    'Field-proven in hospital supply chain: −80% bills on hold',
    'Runs on soccer',
];

// 4 Pin configuration. Pins 1–8 run down the left side, 9–16 up the right,
// like a real DIP package.
export const pins = [
    { n: 1, name: 'PY', io: 'I/O', desc: 'Python. Injector sizing, chamber model, robot control.' },
    { n: 2, name: 'C', io: 'I/O', desc: 'C11. diotima, including its own MCP server.' },
    { n: 3, name: 'GO', io: 'I/O', desc: 'Go. Back-end work from the bootcamp years.' },
    { n: 4, name: 'JS', io: 'I/O', desc: 'JavaScript and React. Full-stack apps, and this datasheet.' },
    { n: 5, name: 'I2C', io: 'I/O', desc: 'Reads the TCS34725 color sensor on the competition robot.' },
    { n: 6, name: 'RS485', io: 'I/O', desc: 'Wired link between the ground station and the rocket.' },
    { n: 7, name: 'KICAD', io: 'I', desc: 'Schematics and boards for the ground support equipment.' },
    { n: 8, name: 'GND', io: '—', desc: 'Grounded. Started out in operating room supply chain.' },
    { n: 9, name: 'NC', io: '—', desc: 'Not connected. Available for a summer 2027 internship.', hot: true },
    { n: 10, name: 'TXT', io: 'O', desc: 'Texts a friend every time his team loses. Written by hand, no AI.' },
    { n: 11, name: 'COOK', io: 'I', desc: 'Cooking. Same problem solving, better snacks.' },
    { n: 12, name: 'KICK', io: 'I', desc: 'Soccer, whenever I can get a game.' },
    { n: 13, name: 'TEST', io: 'I', desc: "Test early. Learn from what doesn't work." },
    { n: 14, name: 'ROBO', io: 'I/O', desc: 'Color-sorting robot, ASME Student Design Competition.' },
    { n: 15, name: 'PROP', io: 'I/O', desc: 'Propulsion: injector design and ground support, Comet Rocketry.' },
    { n: 16, name: 'VCC', io: 'PWR', desc: 'Rockets. Main supply.' },
];

// 5 Specifications
export const absMax = [
    ['Hours debugging raw /dev/input before switching to jstest', 'too many', ''],
    ['Actuators on one Raspberry Pi Zero W', '8', 'qty'],
    ['Distance from a loaded N2O tank', 'remote only', ''],
];

export const recommended = [
    ['Team size', '2', '6', 'people'],
    ['Problem difficulty', 'hard', '—', ''],
    ['Feedback latency', '—', 'one test', ''],
];

// 7 Revision history
export const revisions = [
    { rev: 'C', date: 'Now', change: 'Student at UT Dallas. Joined Comet Rocketry: injector design and ground support. Added embedded and propulsion features.' },
    { rev: 'B', date: '2022', change: 'University of Texas full-stack coding bootcamp. Added web stack: Node, React, SQL, MongoDB.' },
    { rev: 'A', date: '2019–2022', change: 'Initial release. Operating room supply chain, St. David\'s Healthcare. First automation scripts (Macro Express) cut monthly bills on hold by 80%.' },
];
