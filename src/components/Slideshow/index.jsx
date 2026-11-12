import arrowLeft from "../../assets/arrow_left.png"
import arrowRight from "../../assets/arrow_right.png"
import "./Slideshow.scss"
import { useState } from "react"


export default function Slideshow(props) {
    const [index, setIndex] = useState(0)

    function nextSlide() {
        setIndex(prev => {
            if (prev === props.slides.length - 1){
                return 0
            } else {
                return prev + 1
            }
        })
    }

    function prevSlide() {
        setIndex(prev => {
            if (prev === 0){
                return props.slides.length - 1
            } else {
                return prev - 1
            }
        })
    }


    return (
        <div className="housing__carrousel">
            {props.length > 1 &&
                <img 
                    onClick={prevSlide}
                    className="housing__carrousel-arrow arrow__left" 
                    src={arrowLeft} 
                    alt="flèche gauche" 
                />
            }
            <img className="housing__pictures" src={props.slides[index]} alt="photo de la location" />
            {props.length > 1 &&<p className="housing__carrousel-number">{`${index + 1}/${props.length}`}</p>}
            {props.length > 1 &&
                <img 
                    onClick={nextSlide}
                    className="housing__carrousel-arrow arrow__right" 
                    src={arrowRight} 
                    alt="flèche droite" 
                />
            }
        </div>
    )
}