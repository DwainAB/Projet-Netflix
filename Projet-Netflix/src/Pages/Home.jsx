import React from 'react';
import Header from "../Components/Header/Header"
import CallApi from '../Components/CallApi/CallApi';
import MovieBox from "../MovieBox.js"



function Home(){
 
    return (
        <div>
            <Header/>
            <MovieBox/>
        </div>

    )
}

export default Home