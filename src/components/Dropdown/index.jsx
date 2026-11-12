import "./Dropdown.scss"
import { ChevronUp } from "lucide-react"

export default function DropdownMenu(props) {
    return (
        <div className="container">
            <button onClick={() => props.toggle(props.id)} className="dropdown">
                <p className="dropdown__name">{props.title}</p>
                <ChevronUp className={`dropdown__chevron ${props.isOpen ? "rotate" : ""} dropdown__icon`} />
            </button>
            {props.isOpen && <div style={{ display: "block" }} className="dropdown__content">
                {props.content}
            </div>}
        </div>
    )
}