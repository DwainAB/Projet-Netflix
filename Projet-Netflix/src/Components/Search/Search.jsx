import { useEffect, useState } from 'react';
import { tmdbService } from '../CallApi/CallApi';
import { API_IMG } from '../CallApi/Config';
import "../Search/Search.css"

function GetAllMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  let html = ``

  useEffect(() => {
    const fetchData = async () => {
      const keys = Object.keys(tmdbService);
      const moviesResponse = await Promise.all(keys.map(key => tmdbService[key]()));
      const moviesData = moviesResponse.map(response => response.data);
      setMovies(moviesData);
    };
    fetchData();
  }, []);

  const handleSearchTerm = (e) =>{
    let value = e.target.value
    setSearchTerm(value)
  }

  for (let i = 0; i < movies.length && i < 10; i++) {
    let moviesResults = movies[i].results;

    for (let j = 0; j < moviesResults.length && j < 10; j++) {
      console.log(moviesResults[j].title);
      html += `
      <div class="search-bar-item">
        <img class="movie_search" src="${API_IMG}${moviesResults[j].poster_path}"
        <h3>${moviesResults[j].title}</h3>
      </div>`; 
    }

    
  }

  return (
    <div className='container_search_page'>
      <label htmlFor="search_bar"></label>
      <input type="search" id="search_bar" placeholder='Search' onChange={handleSearchTerm}/>
      <div id="movies_search" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default GetAllMovies;

