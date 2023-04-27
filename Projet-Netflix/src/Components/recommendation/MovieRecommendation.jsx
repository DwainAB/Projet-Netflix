import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { API_IMG } from "../CallApi/Config";
import { Link } from 'react-router-dom';
import { API_KEY } from "../CallApi/Config";


function MovieRecommendation(){

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const [movies, setMovies] = useState([]);
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des films similaires:', error);
    });


  const queryString = encodeURIComponent(JSON.stringify(movies));

  const renderMovies = () => {
    const movieElements = [];
    for (let i = 0; i < movies.length; i++) {
      movieElements.push(
        <div className="movie" key={movies[i].id}>
          <Link to={`/FilmSelected?data=${queryString}&id=${movies[i].id}`}>
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

  return(
    <div>
    {movies.length ? (
      <>
        <div style={{margin:0}} className="list_film_watching">
          <h2 className="list_film_title">Recommendation</h2>
          <div className="film_watching">{renderMovies()}</div>
        </div>
      </>
    ) : (
      <p>Chargement en cours...</p>
    )}
  </div>
  )
}

export default MovieRecommendation