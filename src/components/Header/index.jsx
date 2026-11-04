import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Header.scss"

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="Kasa logo" />
            </div>
            <nav className="header__navbar">
                <NavLink to="/" className="header__navbar-link">Accueil</NavLink>
                <NavLink to="/about" className="header__navbar-link">A Propos</NavLink>
            </nav>
        </header>
    )
}