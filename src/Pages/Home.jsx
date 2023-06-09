import React from 'react';
import Header from "../Components/Header/Header"
import MovieBox from "../Components/MovieBox/MovieBox"
import Channels from '../Components/Channels/Channels';
import WebsiteAdvantage from '../Components/WebsiteAdvantage/WebsiteAdvantage';
import GetAllMovies from '../Components/Search/Search';
import Music from '../Components/Music/Music';

function Home(){
 
    return (
        <div>
            <GetAllMovies/>
            <Header/>
            <Channels/>
            <MovieBox/>
            <Music/>
            <WebsiteAdvantage/>
        </div>

    )
}

export default Home