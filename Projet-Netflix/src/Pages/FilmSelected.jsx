import React from "react";
import FilmInfo from "../Components/FilmInfo/FilmInfo";
import MovieRecommendation from "../Components/MovieRecommendation/MovieRecommendation"

function FilmSelected(){
    return (
        <div>
            <FilmInfo/>
            <MovieRecommendation/>
        </div>
    )
}

export default FilmSelected