import { Link, NavLink } from 'react-router-dom';
import { doc, email } from '../site';

export default function Nav() {
    return (
        <header className="docbar">
            <div className="docbar-inner">
                <Link to="/" className="part">
                    <span className="part-num">MT-27</span>
                    <span className="part-name">Matt Thomsen</span>
                </Link>
                <nav className="docnav">
                    <NavLink to="/" end>Datasheet</NavLink>
                    <NavLink to="/work">Applications</NavLink>
                    <NavLink to="/about">Description</NavLink>
                    <a href={`mailto:${email}`} className="order">Contact</a>
                </nav>
                <span className="docnum">{doc.number} · REV {doc.rev} · {doc.date}</span>
            </div>
        </header>
    );
}
