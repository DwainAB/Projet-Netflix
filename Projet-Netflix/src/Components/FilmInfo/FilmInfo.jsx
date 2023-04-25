import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { API_IMG } from "../CallApi/Config";
import { Link } from "react-router-dom";
import Heart from "../../assets/coeur.png"
import "./FilmInfo.css"
import axios from 'axios';

function FilmInfo(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const queryString = searchParams.get('data');
    const id = searchParams.get('id');
    const myObject = JSON.parse(decodeURIComponent(queryString));
    const searchObject = myObject.find((element) => element.id === parseInt(id));

    const [translatedOverview, setTranslatedOverview] = useState("");

    useEffect(() => {
        if (searchObject) {
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3c55b27b9e2cf84477c1a7e17da7a0bf&language=fr-FR`)
            .then(response => {
                const originalOverview = response.data.overview;
                axios.post('https://api.themoviedb.org/3/trending/all/day', null, {
                    params: {
                        api_key: '3c55b27b9e2cf84477c1a7e17da7a0bf',
                        query: originalOverview
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                }).then(response => {
                    setTranslatedOverview(response.data.translations[0].translated_text);
                }).catch(error => {
                    console.error(error);
                });
            })
            .catch(error => {
                console.error(error);
            });
        }
    }, [id, searchObject]);

    let filmElement = null;

    if (searchObject) {
        console.log(searchObject);
        filmElement = (
            <div className="container_filmInfo">

                <img className="background_filmInfo" src={API_IMG+searchObject.backdrop_path} alt="" />
                <div className="shadow_filmInfo"></div>
               <div className="container_img_filmInfo">
                    <img className="img_filmInfo" src={API_IMG+searchObject.poster_path} alt="" />
               </div>

               <div className="container_info_filmInfo">

                  <div className="info_filmInfo">

                    <div className="btns">
                        <Link className="btn" to="/">Play</Link>
                        <Link className="btn" to="/">Details</Link>
                        <img className="info_filmInfo_heart" src={Heart} alt="" />
                    </div>
                        
                        <h1 className="info_filmInfo_title">{searchObject.title}</h1>

                        <div className="info_filmInfo_tags">
                            <li className="info_filmInfo_tag">{searchObject.release_date}</li>
                            <li className="info_filmInfo_tag">{searchObject.vote_average}</li>
                            <li className="info_filmInfo_tag">{searchObject.original_language}</li>
                        </div>

                        <p className="info_filmInfo_text">{translatedOverview || searchObject.overview}</p>

                    </div>

                    <div className="container_info_distribution">

                    </div>
               </div>
            </div>
        );
    } else {
        filmElement = <p>No film found with this ID</p>;
    }

    return filmElement;
}

export default FilmInfo;
