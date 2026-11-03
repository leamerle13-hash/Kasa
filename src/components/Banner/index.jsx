import picture from "../../assets/picture1.jpg"

export default function Banner() {
    return (
        <div className="banner">
            <img src={picture} className="banner__img" alt="photo d'une falaise" />
            <h2 className="banner__text">Chez vous, partout net ailleurs</h2>
        </div>
    )
}