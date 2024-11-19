import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import StormKitchen from "./StormKitchen"; // Importa tu nuevo componente StormKitchen
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import BlossomsOfPeace from "./BlossomsOfPeace";
import DriftUp from "./DriftUp";
import Home from "./Home";
import Amuleto from "./Amuleto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            <Menu/>
          </>
        }/>
        <Route path="/StormKitchen" element={<StormKitchen />} /> {/* Ruta para StormKitchen */}
        <Route path="/BlossomsOfPeace" element={<BlossomsOfPeace />} /> {/* Ruta para StormKitchen */}
        <Route path="/DriftUp" element={<DriftUp />} /> {/* Ruta para StormKitchen */}
        <Route path="/Home" element={<Home />} /> {/* Ruta para StormKitchen */}
        <Route path="/Amuleto" element={<Amuleto />} /> {/* Ruta para StormKitchen */}
      </Routes>
    </Router>
  );
}

export default App;
