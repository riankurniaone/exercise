import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/trending" className="nav-link">
                    Trending
                </Link>
                <Link to="/search" className="nav-link">
                    Search
                </Link>
            </nav>
            <hr />
        </>
    );
}