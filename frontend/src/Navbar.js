import NameLogo from "./logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between mb-3 px-2">
                <Link className="navbar-brand" to="/">
                    <img src={NameLogo} height="35" alt="projectideas" />
                </Link>
                <button
                    className="navbar-toggler me-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className="nav-item nav-link"
                            activeClassName="nav-item nav-link active"
                            to="/projects"
                        >
                            Link
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
