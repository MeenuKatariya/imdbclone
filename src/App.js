import './App.css';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PhotoGallary } from './components/moviedetails/PhotoGallary';
import { ImageShow } from './components/moviedetails/ImageShow';
import { TrailerShow } from './components/moviedetails/TrailerShow';
import {Pages} from './pages/Pages'


function App() {
  return (
    <div className="App">
    {/* <MovieDetailsPage/> */}

    {/* <TrailerShow/> */}
    {/* <PhotoGallary/> */}
    {/* <ImageShow/> */}
  
<Pages/>


    </div>
  );
}

export default App;
