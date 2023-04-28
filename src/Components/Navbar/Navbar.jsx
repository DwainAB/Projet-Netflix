import React, { useState} from "react";
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.svg"
import GetAllMovies from "../Search/Search";

function Navbar(){

    //Permet lors du clique sur le bouton recherche d'ouvrir ou fermer le menu
    const [showGetAllMovies, setShowGetAllMovies] = useState(false);

    //Fonction lors du clique sur le logo de recherche, permet d'envoyer la différence de ce qui est stocké dans showGetAllMovies
    const handleMoviesClick = () => {
        setShowGetAllMovies(!showGetAllMovies);
      };


      //GetAllMovies est appelé avec une props "show"
      //Ce qui nous permettra de géré l'état du menu dans son fichier
    return(
        <div className="container-navbar">
            <img src={logo} alt="logo du site" />
            <input id="checkbox" class="menu-trigger-input" type="checkbox" />
			<label for="checkbox" class="menu-trigger" ><span class="material-symbols-outlined">menu</span></label>

          <div className="navbar-global">
            <ul className="navbar-sections">
                <li className="navbar-link active"><a href="/">Home</a></li>
                <li className="navbar-link"><a href="/error">TV</a></li>
                <li className="navbar-link"><a href="/error">EPG</a></li>
                <li className="navbar-link"><a href="/error">Catchup</a></li>
                <li className="navbar-link"><a href="/error">Movies</a></li>
                <li className="navbar-link"><a href="/error">TV-Shows</a></li>
                <li className="navbar-link"><a href="/Accordeon">F.A.Q</a></li>
                <li className="navbar-link"><a href="/error">Setting</a></li>
            </ul>
        
            <ul className="navbar-general">
                <li className="navbar-link general-item"  onClick={handleMoviesClick}><span class="material-symbols-outlined" >search</span></li>
                <li className="navbar-link general-item"><span class="material-symbols-outlined">notifications</span></li>
                <li className="navbar-link general-item">
                    <select name="languages" id="languages">
                        <option value="EN">EN</option>
                        <option value="FR">FR</option>
                    </select>
                </li>
            </ul>
        </div>
        <GetAllMovies show={showGetAllMovies} />

        </div>
    )
}

export default Navbar