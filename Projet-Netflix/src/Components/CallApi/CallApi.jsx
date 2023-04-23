import axios from 'axios';
import { API_KEY } from '../CallApi/Config.jsx';

const baseUrl = 'https://api.themoviedb.org/3';

export const tmdbService = {
  getMovie: (id) => {
    return axios.get(`${baseUrl}/movie/${id}?api_key=${API_KEY}&language=fr-FR`);
  },
  searchMovies: (query) => {
    return axios.get(`${baseUrl}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}`);
  },
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
