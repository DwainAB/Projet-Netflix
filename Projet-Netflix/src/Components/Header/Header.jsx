import React, {useEffect, useState} from 'react';
import { tmdbService } from '../CallApi/CallApi';


function DisplayData() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      tmdbService.getPopularMovies()
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    return(
        <div>
            <h1>{movies[0].title}</h1>
        </div>
    )
}

export default DisplayData;