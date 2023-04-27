import axios from 'axios';
import { API_KEY } from '../CallApi/Config.jsx';

const baseUrl = 'https://api.themoviedb.org/3';

export const tmdbService = {
  
  getPopularMovies: (id) => {
    return axios.get(`${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
  },
  getKidsMovies: (id) => {
    return axios.get(`${baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`);
  },
  getAdventureActionMovies: (id) => {
    return axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=12,28`);
  },
  getHorrorMovies: (id) => {
    return axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`);
  },
  getPopularTVShows: (id) => {
    return axios.get(`${baseUrl}/tv/popular?api_key=${API_KEY}`);
  },
  getHistoryMovies: (id) => {
    return axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=36`);
  },
  getSimilar: (id) => {
    return axios.get(`${baseUrl}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
  }
  
};




