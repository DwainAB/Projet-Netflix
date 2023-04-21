import React from 'react';
import Header from "../Components/Header/Header"
import MovieBox from "../Components/MovieBox/MovieBox"
import Channels from '../Components/Channels/Channels';



function Home(){
 
    return (
        <div>
            <Header/>
            <MovieBox/>
            <Channels/>
            
        </div>

    )
}

export default Home