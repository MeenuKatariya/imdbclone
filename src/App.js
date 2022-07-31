import "./App.css";
import { Footer } from "./Components/component_jasmine/TempFooter";
import { Navbar } from "./Components/component_jasmine/TempNavbar";
import { Pages } from "./pages/Pages";

function App() {
  return (
    <div>
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
