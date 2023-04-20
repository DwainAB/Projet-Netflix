import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from "./Pages/Home"
import FilmSelected from "./Pages/FilmSelected"
import Error from "./Pages/Error"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import "../src/App.css"

function App(){
	return (
    <BrowserRouter>
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