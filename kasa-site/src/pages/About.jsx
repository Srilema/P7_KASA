import '../App.css';
import Dropdown from '../components/Dropdown';
import Heading from '../components/Heading';

import Background from '../images/kalen-emsley-Bkci_8qcdvQ-unsplash.png';

function About() {
  document.title = "Kasa - A Propos";
  return <>
    <Heading Image={Background} Alt="Bakground of mountains and forest" />
    <div className="dropMain">
    <Dropdown Title="Fiable">
      <p>La sécurité et la fiabilité, nos locations sont vérifiées, avec une communication fluide et claire</p>
    </Dropdown>
    <Dropdown Title="Respect">
      <p>Le respect des lois, de votre vie privée, et celle des locations</p>
    </Dropdown>
    <Dropdown Title="Service">
      <p>Service agréable, a votre écoute et une communication rapide et claire, au moindre problèmes, une solution</p>
    </Dropdown>
    <Dropdown Title="Responsabilité">
      <p>Nous prenons toutes responsabilité quand au location, s'assurant que les offres proposés sont sures, et qun'aucune arnaques n'est présente</p>
    </Dropdown>
    </div>
    </>
};

export default About;
