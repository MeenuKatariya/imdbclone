import './App.css';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PhotoGallary } from './components/PhotoGallary';

function App() {
  return (
    <div className="App">
      {/* <MovieDetailsPage/> */}
      <PhotoGallary/>
    </div>
  );
}

export default App;
