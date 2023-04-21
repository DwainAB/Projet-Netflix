import React, {useState, useEffect} from "react";
import { tmdbService } from "./Components/CallApi/CallApi";
import { Link } from "react-router-dom";
import { API_IMG } from "./Components/CallApi/Config";



const MovieBox = ()=>{

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      tmdbService.getKidsMovies()
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    
    return(
        <div>
            
            
        </div>
    )
}

export default MovieBox;