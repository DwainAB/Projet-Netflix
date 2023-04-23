import React, { useEffect, useState } from "react";
import { tmdbService } from "../CallApi/CallApi";
import { API_IMG } from "../CallApi/Config";
import { Link } from 'react-router-dom';


function MovieRecommendation(){
  const [movies, setMovies] = useState([]);
  const queryString = encodeURIComponent(JSON.stringify(movies));

  useEffect(() => {
    tmdbService.getHorrorMovies()
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderMovies = () => {
    const movieElements = [];
    for (let i = 0; i < 8; i++) {
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