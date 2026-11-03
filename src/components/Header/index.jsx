import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="Kasa logo" />
            </div>
            <nav className="header__navbar">
                <Link to="/" className="header__navbar-link">Accueil</Link>
                <Link to="/about" className="header__navbar-link">A Propos</Link>
            </nav>
        </header>
    )
}