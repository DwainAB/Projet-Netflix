import React from 'react';
import Header from "../Components/Header/Header"
import MovieBox from "../Components/MovieBox/MovieBox"
import Channels from '../Components/Channels/Channels';



function Home(){
 
    return (
        <div>
            <Header/>
            <Channels/>
            <MovieBox/>
        </div>

    )
}

export default Home