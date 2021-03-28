import NameLogo from "./Logo.png";
import { NavLink, Link, useHistory } from "react-router-dom";
import { logout, useGlobalState } from './State';

export default function Navbar() {
    let history = useHistory();
    const [user] = useGlobalState("user");

    const startLogout = () => {
        logout();
        history.push("/")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between mb-3 px-2">
                <Link className="navbar-brand" to="/home">
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
                            to="/scheduled"
                        >
                            Scheduled activities
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link"
                            activeClassName="nav-item nav-link active"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </ul>
                    {user.id != null && <ul className="navbar-nav ms-auto" id="navbarLogin">
                        <li className="navbar-btn">
                            <Link
                                onClick={startLogout}
                                className="btn btn-outline-danger my-2 my-sm-0"
                            >
                                Log out
                            </Link>
                        </li>
                    </ul>}
                </div>
            </nav>
        </div>
    );
}
