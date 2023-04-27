import React from 'react';
import Header from "../Components/Header/Header"
import MovieBox from "../Components/MovieBox/MovieBox"
import Channels from '../Components/Channels/Channels';
import WebsiteAdvantage from '../Components/WebsiteAdvantage/WebsiteAdvantage';
import Music from '../Components/Music/Music';
import Accordeon from '../Components/Accordeon/Accordeon';




function Home(){
 
    return (
        <div>
            <Header/>
            <Channels/>
            <MovieBox/>
            <Music/>
            <WebsiteAdvantage/>
            <Accordeon/>
        </div>

    )
}

export default Home