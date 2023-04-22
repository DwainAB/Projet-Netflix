import React from 'react';
import Header from "../Components/Header/Header"
import MovieBox from "../Components/MovieBox/MovieBox"
import Channels from '../Components/Channels/Channels';
import WebsiteAdvantage from '../Components/WebsiteAdvantage/WebsiteAdvantage';



function Home(){
 
    return (
        <div>
            <Header/>
            <Channels/>
            <MovieBox/>
            <WebsiteAdvantage/>
        </div>

    )
}

export default Home