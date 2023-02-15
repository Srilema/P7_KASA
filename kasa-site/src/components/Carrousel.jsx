import {useState} from "react";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Carrousel(prop){
    const [scroll, setScroll] = useState(0);
    const scrollUp = () =>{
        if(scroll<prop.tab.length-1){
            setScroll(scroll +1)
        } else {
            setScroll(0);
        }
    };
    const scrollDown = ()=>{
        if (scroll!==0){
            setScroll(scroll -1)
        } else {
            setScroll(prop.tab.length-1)
        }
    };
    return(
        <div className="carrousel">
            {prop.tab.length>1 && <>
            <div className="carrouselNavUp"><FontAwesomeIcon icon={faChevronRight} onClick={scrollUp}></FontAwesomeIcon></div>
            <div className="carrouselNavDown"><FontAwesomeIcon icon={faChevronLeft} onClick={scrollDown}></FontAwesomeIcon></div></>}
            <div className="innerCarrousel" style={{transform: `translateX(-${scroll * 100}%)`}}>
                {prop.tab.map((image, index)=>(
                    <div className="imageCarrousel" key={index}>
                        <img  src={image} alt="appartment"></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrousel;