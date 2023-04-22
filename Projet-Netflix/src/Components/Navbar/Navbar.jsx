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
                <li className="navbar-link active"><a href="/">Home</a></li>
                <li className="navbar-link"><a href="/">TV</a></li>
                <li className="navbar-link"><a href="/">EPG</a></li>
                <li className="navbar-link"><a href="/">Catchup</a></li>
                <li className="navbar-link"><a href="/">Movies</a></li>
                <li className="navbar-link"><a href="/">TV-Shows</a></li>
                <li className="navbar-link"><a href="/">Library</a></li>
                <li className="navbar-link"><a href="/">Setting</a></li>
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