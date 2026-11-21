import "./Rating.scss"

export const Rating = (props) => {
    const rating = parseInt(props.rating)

    const starsArray = Array.from([1, 2, 3, 4, 5])
        .map((element, index) => {
            return (
                <span
                    key={index}
                    className={index < rating ? "rating__star-active" : "rating__star-grey"}
                >
                    {"★"}
                </span>
            ) 
        })

    return starsArray
}        