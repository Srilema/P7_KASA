import '../App.css';
import Dropdown from '../components/Dropdown';
import Carrousel from '../components/Carrousel';
import Rating from '../components/Rating';
import logements from "../logements.json";
import Error from './Error'

function Location() {
  //get 1 logement information to render page
  let url = window.location.href;
  let logementSplit = url.split('location/');
  let logementId = logementSplit.at(-1);
  console.log(logementId);
  let logement = logements.find(element => element.id ===logementId);
  
  //handle error - location non-existante ou erreur d'url
  if (logement===undefined){
    return <Error />
  } else{
  document.title = "Kasa -" + logement.title;
  return <>
  <Carrousel tab={logement.pictures} />
  <div>
    <div className="locInfos">
      <div>
        <div className="titles">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
        </div>
        <div className="tagline">
          {logement.tags.map((oneTag)=>
            <div className="tag">{oneTag}</div>
          )}
        </div>
      </div>
      <div className="host">
        <div className="hostProfile">
          <div className="hostName">{logement.host.name}</div>
            <img src={logement.host.picture} alt="host profil"></img>
        </div>
        <Rating rate={logement.rating} />
      </div>
    </div>
    <div className="dropContainer">
      <Dropdown Title='Description'>
        <p>{logement.description}</p>
      </Dropdown>
      <Dropdown Title='Equipements'>
      {logement.equipments.map((equipment)=>
          <div>{equipment}</div>
        )}
      </Dropdown>
    </div>
  </div>
  </>}
};


export default Location;
