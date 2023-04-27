import React, {useState, useEffect} from "react";
import { tmdbService } from "../CallApi/CallApi";
import { Link } from "react-router-dom";
import { API_IMG } from "../CallApi/Config";
import "../MovieBox/MovieBox.css"



const MovieBox = ()=>{

  const [movies, setMovies] = useState([]);
  const [movieserie, setmovieserie] = useState([]);
  const [moviesHistory, setHistory] = useState([]);

  const queryStringSerie = encodeURIComponent(JSON.stringify(movieserie));
  const queryStringHistory = encodeURIComponent(JSON.stringify(moviesHistory));
  const queryString = encodeURIComponent(JSON.stringify(movies));


  useEffect(() => {
    tmdbService.getAdventureActionMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    tmdbService.getPopularTVShows()
      .then((response) => {
        setmovieserie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

useEffect(() => {
  tmdbService.getHistoryMovies()
    .then((response) => {
      setHistory(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  const affichage = () => {
    const movieElements = [];
    for (let i = 0; i < 3; i++) {
      movieElements.push(
        <div className="movie" key={movieserie[i].id}>
          <Link to={`/FilmSelected?data=${queryStringSerie}&id=${movieserie[i].id}`}>
          <img
            src={API_IMG + movieserie[i].poster_path}
            alt={movieserie[i].title}
          />
          </Link>
        </div>
      );
    }
    return movieElements;
  };

  const affichage2 = () => {
    const movieElements = [];
    for (let i = 1; i < moviesHistory.length; i++) {
      movieElements.push(
        <div className="movie" key={moviesHistory[i].id}>
          <Link to={`/FilmSelected?data=${queryStringHistory}&id=${moviesHistory[i].id}`}>
          <img
            src={API_IMG + moviesHistory[i].poster_path}
            alt={moviesHistory[i].title}
          />
          </Link>
        </div>
      );
    }
    return movieElements;
  };

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
      <div className="container-movie-box">
        {movies.length && movieserie.length ?(
          <>
          <div className="featured-movie">
            <h2>Featured Movies</h2>
            <div className="movie-box-films">{renderMovies()}</div>
          </div>

          <div className="featured-tv">
              <h2>Featured TV Shows</h2>

                <div className="featured-tv-info-box">
                  <div className="featured-tv-info-box-movies">{affichage()}</div>
                </div>

          </div>

          <div className="Adventures-films">
            <h2>Adventures films</h2>
            <div className="movie-box-films">{affichage2()}</div>
          </div>
          </>
      ):(
        <p>Aghiles c'est le boss et dwain un tout petit peu</p>
      )}
      </div>
    );
}

export default MovieBox;
