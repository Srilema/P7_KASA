import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";

function Dropdown(props){
    const [open, setOpen] = useState(false);
    return (
    <div className="dropdown">
        <div className="drop-title" onClick={()=>setOpen(!open)}>
            <h3>{props.Title}</h3>
            <div className="drop-title-arrow">
                {open ? (<FontAwesomeIcon icon={faChevronUp}/>) : (<FontAwesomeIcon icon={faChevronDown}/>)}
            </div>
        </div>
        {open && <div className="drop-text">
            <p>{props.children}</p>
            </div>}
    </div>
    )
};

export default Dropdown