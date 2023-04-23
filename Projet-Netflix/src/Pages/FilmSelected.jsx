import React from "react";
import FilmInfo from "../Components/FilmInfo/FilmInfo";
import MovieRecommendation from "../Components/recommendation/MovieRecommendation";

function FilmSelected(){
    return (
        <div>
            <FilmInfo/>
            <MovieRecommendation/>
        </div>
    )
}

export default FilmSelected