import '../App.css';
import {Link} from 'react-router-dom';

function Error() {
  document.title = "Kasa - Erreur";
  return (<>
  <div className="error">
    <h1>404</h1>
    <h3>Oups! La page que vous demandez n'existe pas</h3>
    <Link to={"/"}>Retourner sur la page d'accueil</Link>
  </div>
  </>)
};

export default Error;
