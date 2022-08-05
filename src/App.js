import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import {WhatToWatch} from './Components/components_vishal/WhatToWatch';
// import TempNavbar from './Components/components_vishal/TempNavbar';

function App() {
  return (
    <div className="App">
      {/* <SwipeableTextMobileStepper/> */}
      {/* <TempNavbar/> */}
      
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/what-to-watch' element={<WhatToWatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
