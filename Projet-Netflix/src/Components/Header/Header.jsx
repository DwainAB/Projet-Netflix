import React, { useEffect, useState } from "react";
import { tmdbService } from "../CallApi/CallApi";
import { API_IMG } from "../CallApi/Config";
import "../Header/Header.css";
import { Link } from 'react-router-dom';



function DisplayData() {
  const [movies, setMovies] = useState([]);
  const queryString = encodeURIComponent(JSON.stringify(movies)); //Permet convertir movies en une chaîne JSON.

  //Récupération des films populaires et les mets dans movies
  useEffect(() => {
    tmdbService.getPopularMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

//Permet d'afficher les filmes qu'il y a dans movies
  const renderMovies = () => {
    const movieElements = [];
    for (let i = 0; i < movies.length; i++) {
      movieElements.push(
        <div className="movie movie_container_hover" key={movies[i].id}>
          <div className="movie_hover">{movies[i].overview}</div>
          <Link to={`/FilmSelected?id=${movies[i].id}`}>
          <img
            src={API_IMG + movies[i].poster_path}
            alt={movies[i].title}
          />
          </Link>
        </div>
      );
    }
    return movieElements;
  };
  
  //Permet de faire l'effet de hover sur les films
  //Récupère les éléments qui ont la classe movie_container_hover
  const movieElements = document.querySelectorAll('.movie_container_hover');

  //Parcours des éléments qui ont cette classe et fait l'effet de survol sur son movie_hover
  for (let i = 0; i < movieElements.length; i++) {
    const movieElement = movieElements[i];
    movieElement.addEventListener('mouseover', (event) => {
      const movieHover = movieElement.querySelector('.movie_hover');
      if (movieHover) {
        movieHover.style.display = 'block';
      }
    });
  
    movieElement.addEventListener('mouseout', (event) => {
      const movieHover = movieElement.querySelector('.movie_hover');
      if (movieHover) {
        movieHover.style.display = 'none';
      }
    });
  }
  
  //Une condition est mis au debut du return pour éxécuter le code seulement si movies n'est pas vide
  //Sinon Chargement en cours...
  return (
    <div className="container_header">
      {movies.length ? (
        <>
          <img className="background_header_mobile" src={API_IMG + movies[19].poster_path}alt=""/>
          <div className="shadow"></div>
          <img className="background_header" src={API_IMG + movies[19].backdrop_path}alt=""/>
          <div className="header_info">
            <h1 className="header_title">{movies[19].title}</h1>
            <ul className="header_tags">
              <li className="tag">{movies[19].release_date}</li>
              <li className="tag">{movies[19].vote_average}</li>
              <li className="tag">{movies[19].original_language}</li>
            </ul>
            <p className="header_description">{movies[19].overview}</p>
          </div>

          <div className="btn_info">
            <Link className="btn" to={`/FilmSelected?data=${queryString}&id=${movies[19].id}`}>Play</Link>
			      <Link className="btn" to="/">Details</Link>
          </div>

          <div className="list_film_watching">
            <h2 className="list_film_title">Continue watching</h2>
            <div className="film_watching">{renderMovies()}</div>
          </div>
        </>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default DisplayData;
