
import HeaderProjects from "./Components/HeaderProjects"
import Drift from "./Components/Drift"
import Footer from "./Components/Footer";
import AboutDrift from "./Components/AboutDrift";
import Contact from "./Components/Contact";
import { useEffect } from 'react';


function DriftUp() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Lleva el scroll a la parte superior
  }, []);

  return (
    <>
      <HeaderProjects/>
      <div style={{ marginTop: '100px' }}></div>
      <AboutDrift/>
      <Drift/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default DriftUp
