import React, {useState, useEffect} from "react";
import { tmdbService } from "../CallApi/CallApi";
import { Link } from "react-router-dom";
import { API_IMG } from "../CallApi/Config";
import "../MovieBox/MovieBox.css"



const MovieBox = ()=>{

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdbService.getAdventureActionMovies()
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
          <img
            src={API_IMG + movies[i].poster_path}
            alt={movies[i].title}
          />
        </div>
      );
    }
    return movieElements;
  };


    return(
      <div className="container-movie-box">
        {movies.length ?(
          <>
            <h2>Featured Movies</h2>
            <div className="movie-box-films">{renderMovies()}</div>
          </>
      ):(
        <p>Aghiles c'est le boss et dwain un tout petit peu</p>
      )}
      </div>
    );
}

export default MovieBox;
