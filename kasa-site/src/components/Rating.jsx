import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = (prop)=>{
    const rate = prop.rate;
    return (
        <span className="rating">
            {[...Array(5)].map((stars, index)=>{
                console.log(rate);
                console.log(index);

                return(
                    <FontAwesomeIcon icon={faStar} className={index < rate ? "full" : "empty"} key={index} ></FontAwesomeIcon>
                )
            }
            )}
        </span>
    )
}

export default Rating;