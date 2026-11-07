import "./Dropdown.scss"
import { ChevronUp } from "lucide-react"

export default function DropdownMenu(props) {
    return (
        <div>
            <div className="dropdown">
                <p className="dropdown__name">{props.title}</p>
                <button onClick={() => props.toggle(props.id)} className="dropdown__icon">
                    <ChevronUp className={props.isOpen ? "icon-animation" : "icon-animation2"} />
                </button>
            </div>
            {props.isOpen && <div style={{ display: "block" }} className="dropdown__content">
                <p className="dropdown__content-text">
                    {props.content}
                </p>
            </div>}
        </div>
    )
}