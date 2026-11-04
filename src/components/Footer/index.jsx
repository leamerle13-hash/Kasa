import "./Footer.scss"
import logo from "../../assets/logo-black.png"

export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="logo Kasa" />
            <div className="footer__text">
                <p className="footer__rigths">© 2020 Kasa.</p>
                <p className="footer__rigths-break"> All rights reserved</p>
            </div>
        </footer>
    )
}