import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import {Footer} from "./Components/Footer"
import { CreateAccount } from './Pages/SignUp/CreateAccount';
import {Sign} from "./Pages/SignUp/Sign"
import {Login} from "./Pages/Login/Login"
import {Pages} from "./Pages/Pages"
import {Menu} from './Pages/Menu';
import { IMDbProImage } from './Pages/IMDbProImage';
function App() {
  return (
    <div className="App">
     {/* <createAccount/> */}
      {/* <Login/> */}
      {/* <Sign/> */}
      <Navbar/>
      <Pages/>
      {/* <Menu/> */}
     {/* <Footer/> */}
     {/* <IMDbProImage/> */}
    </div>
  );
}

export default App;
