import { Link } from "react-router-dom";
import "./Error.scss"

export default function Error() {
    return (
        <div className="page">
            <div className="error">
                <h1 className="error__title">404</h1>
                <div className="error__description-container">
                    <h2 className="error__description">Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}