// The "Play" page. Fill it with photos as you take them.
export default function OffTheClock() {
    return (
        <div className="sheet">
            <p className="report-kind">Application Note</p>
            <h1 className="page-h">Off-the-clock operation</h1>
            <p className="subtitle">What the MT-27 does when it isn't sizing injectors.</p>
            <div className="otc-grid">
                <div className="otc">
                    <span className="report-kind">Soccer</span>
                    <p className="big">I play whenever I can.</p>
                    <span className="ph-label">Photos coming soon</span>
                </div>
                <div className="otc">
                    <span className="report-kind">Cooking</span>
                    <p className="big">Same problem solving, better snacks.</p>
                    <span className="ph-label">Photos coming soon</span>
                </div>
                <div className="otc otc-dark">
                    <span className="report-kind">Side quest</span>
                    <p className="big">A program that texts my friend every time his team loses.</p>
                    <span className="ph-label">Written by hand. No AI.</span>
                </div>
            </div>
        </div>
    );
}
