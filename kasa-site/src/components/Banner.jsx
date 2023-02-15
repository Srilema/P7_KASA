import logo from "../LOGO-kasa.svg";

function Banner(){
    return (<header>
        <div className="navImage">
            <img src= {logo} alt="Logo de Kasa"></img>
        </div>
        <div className="navbar">
            <ul>
            <li><a href= "/">Accueil</a></li>
            <li><a href= "/about">A Propos</a></li>
            </ul>
        </div>
    </header>)
};

export default Banner;