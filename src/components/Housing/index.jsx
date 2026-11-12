import "./Housing.scss"
import { useParams } from 'react-router-dom'
import logements from "../../data/logements.json"
import DropdownMenu from "../Dropdown"
import Slideshow from "../Slideshow"
import Rating from "../Rating"
import { useState } from "react"
import React from "react"

export default function Housing() {

    const { id } = useParams()

    const logement = logements.find(
        (article) => article.id === id
    )

    const tags = logement.tags.map((tag) => {
        return (
            <ul key={tag} className="housing__tags-item">
                {tag}
            </ul>
        )
    })

    const hostName = logement.host.name
    const nameSplit = hostName.split(" ")
    const firstName = nameSplit[0]
    const lastName = nameSplit[1]

    const [dropdown, setDropdown] = React.useState(null)

    function toggle(id) {
        setDropdown(prev => prev === id ? null : id)
    }

    const listDisplay = logement.equipments.map((item) => {
        return (
            <li key={item}>{item}</li>
        )
    })

    

    return (
        <div className="housing">
            <Slideshow 
                length={logement.pictures.length}
                slides={logement.pictures}
            />
            <div className="housing__info">
                <div>
                    <h1 className="housing__title">{logement.title}</h1>
                    <h2 className="housing__location">{logement.location}</h2>
                    <li className="housing__tags">
                        {tags}
                    </li>
                </div>
                <div className="housing__container">
                    <div className="housing__host">
                        <div className="housing__host-container">
                            <p className="housing__host-name">{firstName}</p>
                            <p className="housing__host-name">{lastName}</p>
                        </div>
                        <img className="housing__host-img" src={logement.host.picture} alt="photo de l'hôte" />
                    </div>
                    <div className="housing__rating">
                        <Rating 
                            rating={logement.rating}
                        />
                    </div>
                </div>
            </div>
            <div className="housing__details">
                <DropdownMenu 
                    title="Description" 
                    content={logement.description}
                    className="dropdown"
                    toggle={toggle}
                    id="description"
                    isOpen={dropdown === "description"}
                />
                <div></div>
                <DropdownMenu 
                    title="Equipements"
                    content={<ul className="housing__details-equipements">{listDisplay}</ul>}
                    toggle={toggle}
                    id="equipements"
                    isOpen={dropdown === "equipements"}
                />
            </div>
        </div>
    )
}