import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="sheet notfound">
            <p className="report-kind">Error 404 · Page not found</p>
            <h1>This page didn't make it off the pad.</h1>
            <Link to="/" className="btn btn-solid">Back home</Link>
        </div>
    );
}
