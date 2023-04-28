import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { API_IMG } from "../CallApi/Config";
import { Link } from "react-router-dom";
import Heart from "../../assets/coeur.png"
import {tmdbService} from "../CallApi/CallApi"
import "./FilmInfo.css"


function FilmInfo(){

    //Récupération des éléments dans l'url
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id'); 
    const data = searchParams.get('data'); 
    const decodedData = decodeURIComponent(data); //Permet de décoder la chaîne de charactère et de convertir en objet JavaScript
    const moviesSimilar = JSON.parse(decodedData); //Permet de convertir la chaîne JSON en un objet JavaScript
    const [movies, setMovies] = useState([])//Initialisation de movies en tableau vide
    let allMovies = [] //Contient tout les films


    //Parcours de l'objet tmdbService pour faire un fetch a chaques méthodes et stocké réponse dans movies
    useEffect(() => {
        const fetchData = async () => {
          const keys = Object.keys(tmdbService);
          const moviesResponse = await Promise.all(keys.map(key => tmdbService[key]()));
          const moviesData = moviesResponse.map(response => response.data);
          setMovies(moviesData);;
        };
        fetchData();
      }, []);

      //Parcours des films de movies et moviesSimilar et les envois dans AllMovies pour n'avoir qu'un seul tableau
    for (let i = 0; i < movies?.length; i++) {
        let results = movies[i].results;

        for (let j = 0; j < results?.length; j++) {
           allMovies.push(results[j])        
        }       
    }

    for (let h = 0; h < moviesSimilar?.length; h++) {
        allMovies.push(moviesSimilar[h])
        
    }

    //Recherche dans AllMovies l'objet qui à la même id que celui de l'url
    const searchObject = allMovies.find((element) => element.id === parseInt(id));

    //Déclaration de l'élément qui stockera notre html
    let filmElement = null;

    //Si l'objet est trouvé : 
    if (searchObject) {
        
        filmElement = (
            <div className="container_filmInfo">

                <img className="background_filmInfo" src={API_IMG+searchObject.backdrop_path} alt="" />
                <div className="shadow_filmInfo"></div>
               <div className="container_img_filmInfo">
                    <img className="img_filmInfo" src={API_IMG+searchObject.poster_path} alt="" />
               </div>

               <div className="container_info_filmInfo">

                  <div className="info_filmInfo">

                    <div className="btns">
                        <Link className="btn" to="/">Play</Link>
                        <Link className="btn" to="/">Details</Link>
                        <img className="info_filmInfo_heart" src={Heart} alt="" />
                    </div>
                        
                        <h1 className="info_filmInfo_title">{searchObject.title}</h1>

                        <div className="info_filmInfo_tags">
                            <li className="info_filmInfo_tag">{searchObject.release_date}</li>
                            <li className="info_filmInfo_tag">{searchObject.vote_average}</li>
                            <li className="info_filmInfo_tag">{searchObject.original_language}</li>
                        </div>

                        <p className="info_filmInfo_text">{searchObject.overview}</p>

                    </div>

                    <div className="container_info_distribution">

                    </div>
               </div>
            </div>
        );
    } else {
        filmElement = <p>No film found with this ID</p>;
    }

    return filmElement;
}

export default FilmInfo;
