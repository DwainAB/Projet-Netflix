import React, {useEffect} from "react";
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.svg"

function Navbar(){

    useEffect(() => {
        const navLinks = document.querySelectorAll('.navbar-link');
        
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            navLinks.forEach(otherLink => otherLink.classList.remove('active'));
            link.classList.add('active');
          });
        });
      
      }, []);

    return(
        <div className="container-navbar">
            <img src={logo} alt="logo du site" />
            <input id="checkbox" class="menu-trigger-input" type="checkbox" />
			<label for="checkbox" class="menu-trigger" ><span class="material-symbols-outlined">menu</span></label>

          <div className="navbar-global">
            <ul className="navbar-sections">
                <li className="navbar-link active">Home</li>
                <li className="navbar-link">TV</li>
                <li className="navbar-link">EPG</li>
                <li className="navbar-link">Catchup</li>
                <li className="navbar-link">Movies</li>
                <li className="navbar-link">TV-Shows</li>
                <li className="navbar-link">Library</li>
                <li className="navbar-link">Setting</li>
            </ul>
        
            <ul className="navbar-general">
                <li className="general-item"><span class="material-symbols-outlined">search</span></li>
                <li className="general-item"><span class="material-symbols-outlined">notifications</span></li>
                <li className="general-item">
                    <select name="languages" id="languages">
                        <option value="EN">EN</option>
                        <option value="FR">FR</option>
                    </select>
                </li>
            </ul>
        </div>

        </div>
    )
}

export default Navbar