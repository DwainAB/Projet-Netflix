import axios from 'axios';
import { API_KEY } from '../CallApi/Config.jsx';

const baseUrl = 'https://api.themoviedb.org/3';


//Objet qui contient les méthodes pour appel api
export const tmdbService = {
  
  getPopularMovies: () => {
    return axios.get(`${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
  },
  getKidsMovies: () => {
    return axios.get(`${baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`);
  },
  getAdventureActionMovies: () => {
    return axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=12,28`);
  },
  getHorrorMovies: () => {
    return axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`);
  },
  getPopularTVShows: () => {
    return axios.get(`${baseUrl}/tv/popular?api_key=${API_KEY}`);
  },
  getHistoryMovies: () => {
    return axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=36`);
  }
  
};




