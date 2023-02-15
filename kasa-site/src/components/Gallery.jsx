import logements from "../logements.json";
import {Link} from 'react-router-dom';

function Gallery(){
    return(
        <div className = "gallery">
            {logements.map((logement)=>(
                <div key={logement.id} className="thumbcard">
                    <Link to={`./location/${logement.id}`}>
                    <div className="thumb-img">
                        <img src={logement.cover} alt={logement.description}></img>
                    </div>
                    <div className="thumb-overlay">
                        <h4>{logement.title}</h4>
                    </div>
                    </Link>
                </div>)
            )}
        </div>
    )
};

export default Gallery;