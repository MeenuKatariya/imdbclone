import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import {Footer} from "./Components/Footer"
import { CreateAccount } from './Pages/SignUp/CreateAccount';
import {Sign} from "./Pages/SignUp/Sign"
import {Login} from "./Pages/Login/Login"
import {Pages} from "./Pages/Pages"
function App() {
  return (
    <div className="App">
     {/* <createAccount/> */}
      {/* <Login/> */}
      {/* <Sign/> */}
      <Navbar/>
      <Pages/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
