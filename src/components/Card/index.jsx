import "./Card.scss"

export default function Card(props) {
    return (
        <article className="card">
            <img className="card__img" src={props.cover} alt="photo du logement" />
            <p className="card__title">{props.title}</p>
        </article>
    )
}