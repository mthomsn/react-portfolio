import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="sheet about">
            <p className="report-kind">Detailed Description</p>
            <h1 className="page-h">I didn't start in tech.</h1>
            <div className="prose">
                <p>
                    From 2019 to 2022 I worked in operating room supply chain at St. David's
                    Healthcare, ordering and stocking surgical supplies and keeping the supply system
                    and the clinical software in agreement. A lot of that job was the same clicks every
                    day. I found a scripting tool called Macro Express and started automating them.
                    Those scripts cut our monthly bills on hold by 80%.
                </p>
                <p>
                    That was the moment programming clicked. In 2022 I did the University of Texas
                    full-stack bootcamp, and now I'm a student at UT Dallas. These days most of my
                    time goes into Comet Rocketry, where I work on the injector for our N2O/IPA
                    liquid motor and the ground equipment that fuels and fires it.
                </p>
                <p>
                    How I work: break the hard problem into pieces, test ideas early, and learn from
                    what doesn't work.
                </p>
            </div>

            <h2 className="sec">Revision History</h2>
            <dl className="timeline">
                <dt>Now</dt>
                <dd>Student at UT Dallas · Comet Rocketry</dd>
                <dt>2022</dt>
                <dd>University of Texas full-stack coding bootcamp</dd>
                <dt>2019–2022</dt>
                <dd>Operating room supply chain, St. David's Healthcare</dd>
            </dl>

            <div className="facts">
                <div>
                    <span className="report-kind">Languages</span>
                    <p>Python, C, Go, JavaScript</p>
                </div>
                <div>
                    <span className="report-kind">Off the clock</span>
                    <p>Soccer and cooking. <Link to="/off-the-clock">More →</Link></p>
                </div>
            </div>
        </div>
    );
}
