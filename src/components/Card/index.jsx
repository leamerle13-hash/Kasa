import "./Card.scss"
import { Link } from "react-router-dom"

export default function Card(props) {
    return (
        <Link to={`/housing/${props.id}`}>
            <article className="card">
                <img className="card__img" src={props.cover} alt="photo du logement" />
                <p className="card__title">{props.title}</p>
            </article>
        </Link>
    )
}