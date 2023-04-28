import { useEffect, useState } from 'react';
import { tmdbService } from '../CallApi/CallApi';
import { API_IMG } from '../CallApi/Config';
import "../Search/Search.css"

function GetAllMovies(props) {
  const [movies, setMovies] = useState([]);
  let html = ``; //Déclaration de l'élément qui stockera notre html
  const nbMovie = [] //Stock les films

  //Appel toutes les api de l'objet tmdbService
  useEffect(() => {
    const fetchData = async () => {
      const keys = Object.keys(tmdbService);
      const moviesResponse = await Promise.all(keys.map(key => tmdbService[key]()));
      const moviesData = moviesResponse.map(response => response.data);
      setMovies(moviesData);;
    };
    fetchData();
  }, []);

  //Envois dans le tableau nbMovie les films de movies
  for (let i = 0; i < movies.length; i++) {
    let moviesResults = movies[i].results;

    for (let j = 0; j < moviesResults.length; j++) {

      nbMovie.push(moviesResults[j])
      
    }
  }

  //Permet de faire la recherche de film
  const handleSearchTerm = (e) => {
    let value = e.target.value.toLowerCase(); //Convertit la valeur en minuscule
    const moviesWithTitles = nbMovie.filter(movie => movie.title); //Garde seulement les objet qui ont un titre
    const uniqueMovies = nbMovie.filter((movie, index) => 
    moviesWithTitles.findIndex(m => m.id === movie.id) === index); //Permet de trouver les id identiques et si l'index est différent supprime 
  
    //Filter les films en gardant que ceux qui comment pareille que la valeur du champs de recherche
    let filteredMovies = uniqueMovies.filter(movie => 
      movie.title.toLowerCase().startsWith(value)
    );
   
    let html = '';
    let queryString = encodeURIComponent(JSON.stringify(filteredMovies))//Permet de transformé le tableau filteredMovies en une chaine de caractères
    for (let l = 0; l < filteredMovies.length && l < 10; l++) { //Pour chaques films de filteredMovies ajoute une div avec les informations du films
      html += `
        <div class="search-bar-item">
          <a href="/FilmSelected?data=${queryString}&id=${filteredMovies[l].id}">
          <img class="movie_search" src="${API_IMG}${filteredMovies[l].poster_path}">
          <h3>${filteredMovies[l].title}</h3>
          </a>
        </div>`; 
    }
  
    document.getElementById('movies_search').innerHTML = html; //Insère dans la div qui a l'id movies_search le html
  }

  
  for (let h = 0; h < nbMovie.length && h < 10; h++){ //Affiche seulement 10 films du tableau nmMovies
     html += `
         <div class="search-bar-item">
           <img class="movie_search" src="${API_IMG}${nbMovie[h].poster_path}"
           <h3>${nbMovie[h].title}</h3> 
         </div>`; 
  }

  //Permet de fermer le menu en cliquant sur la croix
  let btnClose = document.querySelector('.btn-close')
  let container_search_page = document.querySelector('.container_search_page')

  btnClose?.addEventListener('click', () =>{
    container_search_page.style.display = 'none';
  })

  //La props show est inséré ici et elle vérifie si l'élément est en display none ou  bloc et lui donne son contraire avec la fonction de la navbar
  return (
    <div className='container_search_page' style={{ display: props.show ? "block" : "none" }}>
      <span className='btn-close'>X</span>
      <label htmlFor="search_bar"></label>
      <input type="search" id="search_bar" placeholder='Search' onChange={handleSearchTerm}/>
      <div  id="movies_search" dangerouslySetInnerHTML={{ __html: html }}  />
    </div>
  );
}

export default GetAllMovies;


