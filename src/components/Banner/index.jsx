import "./Banner.scss"


export default function Banner(props) {
    return (
        <div className="banner">
            <img className="banner__img" src={props.img} alt={props.alt} />
            <h2 className="banner__text">{props.text}</h2>
        </div>
    )
} 