import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div>
                <h1 className="header__title">Kasa</h1>
            </div>
            <nav className="header__navbar">
                <Link to="/" className="header__navbar-link">Accueil</Link>
                <Link to="/about" className="header__navbar-link">A Propos</Link>
            </nav>
        </header>
    )
}