import React from "react";
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.svg"

function Navbar(){
    return(
        <div className="container-navbar">

            <ul className="navbar-sections">
                <li><img src={logo} alt="logo du site" /></li>
                <li className="navbar-link">Home</li>
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
    )
}

export default Navbar