import { useEffect, useState } from 'react';
import { tmdbService } from '../CallApi/CallApi';
import { API_IMG } from '../CallApi/Config';
import "../Search/Search.css"

function GetAllMovies(props) {
  const [movies, setMovies] = useState([]);
  let html = ``;
  const nbMovie = []

  useEffect(() => {
    const fetchData = async () => {
      const keys = Object.keys(tmdbService);
      const moviesResponse = await Promise.all(keys.map(key => tmdbService[key]()));
      const moviesData = moviesResponse.map(response => response.data);
      setMovies(moviesData);
    };
    fetchData();
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value.toLowerCase();
    const moviesWithTitles = nbMovie.filter(movie => movie.title);
    const uniqueMovies = nbMovie.filter((movie, index) => 
    moviesWithTitles.findIndex(m => m.id === movie.id) === index);
  
    let filteredMovies = uniqueMovies.filter(movie => 
      movie.title.toLowerCase().startsWith(value)
    );
   
    let html = '';
    const queryString = encodeURIComponent(JSON.stringify(filteredMovies))
    for (let l = 0; l < filteredMovies.length && l < 10; l++) {
      html += `
        <div class="search-bar-item">
          <a href="/FilmSelected?data=${queryString}&id=${filteredMovies[l].id}">
          <img class="movie_search" src="${API_IMG}${filteredMovies[l].poster_path}">
          <h3>${filteredMovies[l].title}</h3>
          </a>
        </div>`; 
    }
  
    document.getElementById('movies_search').innerHTML = html;
  }
  


  for (let i = 0; i < movies.length; i++) {
    let moviesResults = movies[i].results;

    for (let j = 0; j < moviesResults.length; j++) {

      nbMovie.push(moviesResults[j])
      
    }
  }

  for (let h = 0; h < nbMovie.length && h < 10; h++){
     html += `
         <div class="search-bar-item">
           <img class="movie_search" src="${API_IMG}${nbMovie[h].poster_path}"
           <h3>${nbMovie[h].title}</h3>
         </div>`; 
  }

  return (
    <div className='container_search_page' style={{ display: props.show ? "block" : "none" }}>
      <label htmlFor="search_bar"></label>
      <input type="search" id="search_bar" placeholder='Search' onChange={handleSearchTerm}/>
      <div  id="movies_search" dangerouslySetInnerHTML={{ __html: html }}  />
    </div>
  );
}

export default GetAllMovies;


