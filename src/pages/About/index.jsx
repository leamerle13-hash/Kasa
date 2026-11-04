import picture from "../../assets/picture2.jpg"
import { ChevronUp } from "lucide-react"
import React from "react"

export default function About() {

    const [accordion, setAccordion] = React.useState(null)
    const [icon, setIcon] = React.useState(false)

    function toggle(id) {
        setAccordion(prev => prev === id ? null : id)
        setIcon(prevIcon => !prevIcon)
    }
    
    return (
        <main>
            <div className="about__banner">
                <img src={picture} alt="photo de montagnes" />
            </div>
            <section className="values__section">
                <div>
                    <div className="accordion">
                        <p className="accordion__name">Fiabilité</p>
                        <button onClick={() => toggle(1)} className="accordion__icon">
                            <ChevronUp className={accordion === 1 && icon ? "icon-animation" : "icon-animation2"} />
                        </button>
                    </div>
                    {accordion === 1 && (
                        <div style={{ display: "block" }} className="accordion__content">
                            <p className="accordion__content-text">
                                Les annonces postées sur Kasa garantissent une fiabilité totale.
                                Les photos sont conformes aux logements, et toutes les informations
                                sont régulièrement vérifiées par nos équipes.
                            </p>
                        </div>
                    )}
                </div>
                <div>
                    <div className="accordion">
                        <p className="accordion__name">Respect</p>
                        <button onClick={() => toggle(2)} className="accordion__icon">
                            <ChevronUp className={accordion === 2 ? "icon-animation" : "icon-animation2"} />
                        </button>
                    </div>
                    {accordion === 2 && (
                        <div style={{ display: "block" }} className="accordion__content">
                            <p className="accordion__content-text">
                                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
                                comportement discriminatoire ou de perturbation du voisinage
                                entraînera une exclusion de notre plateforme.
                            </p>
                        </div>
                    )}
                </div>
                <div>
                    <div className="accordion">
                        <p className="accordion__name">Service</p>
                        <button onClick={() => toggle(3)} className="accordion__icon">
                            <ChevronUp className={accordion === 3 ? "icon-animation" : null} />
                        </button>
                    </div>
                    {accordion === 3 && (
                        <div style={{ display: "block" }} className="accordion__content">
                            <p className="accordion__content-text">
                                Nos équipes se tiennent à votre disposition pour vous fournir
                                une expérience parfaite. N'hésitez pas à nous contacter si
                                vous avez la moindre question.
                            </p>
                        </div>
                    )}
                </div>
                <div>
                    <div className="accordion">
                        <p className="accordion__name">Sécurité</p>
                        <button onClick={() => toggle(4)} className="accordion__icon">
                            <ChevronUp className={accordion === 4 ? "icon-animation" : null} />
                        </button>
                    </div>
                    {accordion === 4 && (
                        <div style={{ display: "block" }} className="accordion__content">
                            <p className="accordion__content-text">
                                La sécurité est la priorité de Kasa. Aussi bien pour nos
                                hôtes que pour les voyageurs, chaque logement correspond
                                aux critères de sécurité établis par nos services.
                                En laissant une note aussi bien à l'hôte qu'au locataire,
                                cela permet à nos équipes de vérifier que les standards sont
                                bien respectés. Nous organisons également des ateliers sur la
                                sécurité domestique pour nos hôtes.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}