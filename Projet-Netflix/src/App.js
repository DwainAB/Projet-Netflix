import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from "./Pages/Home"
import FilmSelected from "./Pages/FilmSelected"
import Error from "./Pages/Error"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import "../src/App.css"
import React,{ useEffect, useState } from "react"
import MovieBox from "./MovieBox"
const API_URL="https://api.themoviedb.org/3/discover/movie?api_key=1bebb5e0d362143f2d253a0beb270da0&certification_country=US&certification=G&with_genres=16"

function App(){
  const [movies, setMovies]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setMovies(data.results);
    })
  }, [])


	return (
    
    <BrowserRouter>
    {movies.map((movieReq)=>
    <MovieBox key={movieReq.id} {...movieReq}/>)}
    <div className="app">
      <Navbar/>
      <div className="global"> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/FilmSelected" element={<FilmSelected/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
        <Footer/>
    </div>
    </BrowserRouter>
	)
}

export default App