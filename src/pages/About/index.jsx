import "./About.scss"
import { useState } from "react"
import backgroundAbout from "../../assets/picture2.jpg"
import Banner from "../../components/Banner"
import DropdownMenu from "../../components/Dropdown"
import string from "../../data/string.json"

export default function About() {

    const [dropdown, setDropdown] = useState(null)

    function toggle(id) {
        setDropdown(prev => prev === id ? null : id)
    }

    const dropdownDisplay = string.map((article) => {
        return (
            <DropdownMenu
                key={article.id} 
                title={article.title}
                content={<p className="dropdown__content-text">{article.content}</p>}
                toggle={toggle}
                id={article.id}
                isOpen={dropdown === article.id}
            />
        )
    })

    
    return (
        <main>
            <Banner 
                text=""
                img={backgroundAbout}
                alt="photo de montagnes" 
            />
            <section className="values__section">
                {dropdownDisplay}
            </section>
        </main>
    )
}