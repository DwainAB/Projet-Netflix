import React from 'react';
import Header from "../Components/Header/Header"
import MovieBox from "../Components/MovieBox/MovieBox"
import Channels from '../Components/Channels/Channels';
import WebsiteAdvantage from '../Components/WebsiteAdvantage/WebsiteAdvantage';
import GetAllMovies from '../Components/Search/Search';
import Music from '../Components/Music/Music';
import UserCRUD from '../Components/usersCrud';
import ProductCRUD from '../Components/productCrud';

function Home(){
 
    return (
        <div>
            <GetAllMovies/>
            <Header/>
            <Channels/>
            <MovieBox/>
            <Music/>
            <WebsiteAdvantage/>
            <UserCRUD/>
            <ProductCRUD/>
        </div>

    )
}

export default Home