import "./Dropdown.scss"
import arrow from "../../assets/arrow_left.png"

export default function DropdownMenu(props) {
    return (
        <div className="container">
            <button onClick={() => props.toggle(props.id)} className="dropdown">
                <p className="dropdown__name">{props.title}</p>
                <img src={arrow} className={`dropdown__chevron ${props.isOpen ? "rotate" : ""} dropdown__icon`} />
            </button>
            {props.isOpen && <div style={{ display: "block" }} className="dropdown__content">
                {props.content}
            </div>}
        </div>
    )
}