import './App.css';
import { Footer } from "./Components/component_jasmine/TempFooter";
import { Navbar } from "./Components/component_jasmine/TempNavbar";
import { Pages } from "./Pages/Pages";
import Home from './Components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import {WhatToWatch} from './Components/components_vishal/WhatToWatch';
// import TempNavbar from './Components/components_vishal/TempNavbar';
import { MovieDetailsPage } from './Pages/MovieDetailsPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PhotoGallary } from './components/moviedetails/PhotoGallary';
import { ImageShow } from './components/moviedetails/ImageShow';
import { TrailerShow } from './components/moviedetails/TrailerShow';
import {Pages} from './Pages/Pages'


function App() {
  return (


 
    <div className="App">
      {/* <SwipeableTextMobileStepper/> */}
      {/* <TempNavbar/> */}
      {/* <MovieDetailsPage/> */}

    {/* <TrailerShow/> */}
    {/* <PhotoGallary/> */}
    {/* <ImageShow/> */}
      
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/what-to-watch' element={<WhatToWatch />}></Route>
      </Routes>
    </div>
  )
}

export default App;
