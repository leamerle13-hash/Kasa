import picture from "../../assets/picture2.jpg"
import React from "react"

export default function About() {

    const [accordion, setAccordion] = React.useState(false)

    function toggle() {
        setAccordion(prev => !prev)
    }

    return (
        <main>
            <div className="about__banner">
                <img src={picture} alt="photo de montagnes" />
            </div>
            <section className="values__section">
                <div id="1">
                    <div className="accordion">
                        <p className="accordion__name">Fiabilité</p>
                        <button onClick={() => toggle()}>click</button>
                    </div>
                    {accordion && (
                        <div style={{display: "block"}} className="accordion__content">
                            <p>
                                Les annonces postées sur Kasa garantissent une fiabilité totale.
                                Les photos sont conformes aux logements, et toutes les informations
                                sont régulièrement vérifiées par nos équipes.
                            </p>
                        </div>
                    )}
                </div>
                <div id="2">
                    <div className="accordion">
                        <p className="accordion__name">Respect</p>
                        <button onClick={toggle}>click</button>
                    </div>
                    {accordion && (
                        <div style={{display: "block"}} className="accordion__content">
                            <p>
                                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
                                comportement discriminatoire ou de perturbation du voisinage 
                                entraînera une exclusion de notre plateforme.
                            </p>
                        </div>
                    )}
                </div>

            </section>
        </main>
    )
}