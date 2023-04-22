import React, { useEffect, useState } from "react";
import { tmdbService } from "../CallApi/CallApi";
import { API_IMG } from "../CallApi/Config";
import "../Header/Header.css";
import { Link } from 'react-router-dom';



function DisplayData() {
  const [movies, setMovies] = useState([]);
  const queryString = encodeURIComponent(JSON.stringify(movies));

  useEffect(() => {
    tmdbService.getPopularMovies()
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

  return (
    <div className="container_header">
      {movies.length ? (
        <>
          <img className="background_header_mobile" src={API_IMG + movies[15].poster_path}alt=""/>
          <div className="shadow"></div>
          <img className="background_header" src={API_IMG + movies[15].backdrop_path}alt=""/>
          <div className="header_info">
            <h1 className="header_title">{movies[15].title}</h1>
            <ul className="header_tags">
              <li className="tag">{movies[15].release_date}</li>
              <li className="tag">{movies[15].vote_average}</li>
              <li className="tag">{movies[15].original_language}</li>
            </ul>
            <p className="header_description">{movies[15].overview}</p>
          </div>

          <div className="btn_info">
            <Link className="btn" to={`/FilmSelected?data=${queryString}&id=${movies[15].id}`}>Play</Link>
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
