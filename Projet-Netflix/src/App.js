import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from "./Pages/Home"
import FilmSelected from "./Pages/FilmSelected"
import Error from "./Pages/Error"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

function App(){
	return (
    <BrowserRouter>
    <div className="app">
      <div className="global"> 
        <Navbar/>
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